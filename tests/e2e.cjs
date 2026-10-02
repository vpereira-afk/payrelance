/* Tests end-to-end de PayRelance (Playwright).
 *   npm install && npx playwright install chromium && npm test
 * Variables utiles : CHROMIUM_PATH (chemin d'un Chromium existant), HEADED=1.
 * L'API EmailJS est MOQUÉE : aucun e-mail n'est réellement envoyé pendant les tests.
 */
const { chromium } = require('playwright');
const { createServer } = require('../scripts/serve.cjs');

let passed = 0, failed = 0;
const ok = (cond, label, extra) => {
  if (cond) { passed++; console.log('  ✔', label); }
  else { failed++; console.log('  ✘', label, extra !== undefined ? '→ ' + JSON.stringify(extra) : ''); }
};

(async () => {
  const server = createServer().listen(0);
  const port = server.address().port;
  const URL = `http://localhost:${port}/index.html`;
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
    headless: !process.env.HEADED,
    args: ['--no-sandbox']
  });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.route('https://fonts.googleapis.com/**', r => r.abort());
  await ctx.route('https://fonts.gstatic.com/**', r => r.abort());
  const emailCalls = []; let emailMode = 'ok';
  await ctx.route('https://api.emailjs.com/**', route => {
    emailCalls.push(JSON.parse(route.request().postData() || '{}'));
    if (emailMode === 'fail') return route.fulfill({ status: 400, body: 'The user_id parameter is required', headers: { 'access-control-allow-origin': '*' } });
    route.fulfill({ status: 200, body: 'OK', headers: { 'access-control-allow-origin': '*' } });
  });

  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|ERR_/.test(m.text())) errors.push(m.text()); });
  const click = async s => { await page.click(s); await page.waitForTimeout(120); };
  const nav = v => click(`.nav-item[data-v="${v}"]`);
  const state = () => page.evaluate(() => {
    const s = window.__PR.S;
    return s.invoices.map(i => ({ id: i.id, client: i.client, st: i.status, rem: i.reminders.map(r => `${r.channel}:${r.status}${r.mode ? '/' + r.mode : ''}`) }));
  });

  console.log('\n# Chargement et règles V1');
  await page.goto(URL); await page.waitForTimeout(800);
  ok(await page.$('.modal'), 'la visite guidée s’affiche au premier chargement');
  await page.evaluate(() => window.__PR.A['tour-end']());
  const views = ['dashboard', 'factures', 'validation', 'relances', 'clients', 'integrations', 'parrainage', 'abonnement'];
  let sms = [];
  for (const v of views) { await nav(v); const t = await page.$eval('#view', e => e.innerText); if (/SMS|recommand/i.test(t)) sms.push(v); }
  ok(sms.length === 0, 'aucune mention de SMS / recommandé hors page Recouvrement (V1 = e-mail + WhatsApp)', sms);
  const channels = await page.evaluate(() => Object.keys(window.__PR.S.scenarios.flatMap(s => s.steps).reduce((a, s) => (a[s.channel] = 1, a), {})));
  ok(channels.every(c => ['email', 'whatsapp'].includes(c)), 'les scénarios n’utilisent que email et whatsapp', channels);

  console.log('\n# Plugin e-mail (EmailJS moqué)');
  await nav('integrations');
  await click('[data-a="email-setup"]');
  await page.fill('#em-service', 'service_test'); await page.fill('#em-template', 'template_test'); await page.fill('#em-key', 'pk_test');
  await page.fill('#em-to', 'prof@universite.fr');
  await click('[data-a="email-test"]'); await page.waitForTimeout(1500);
  ok(emailCalls.length === 1, 'le test d’envoi appelle EmailJS une fois', emailCalls.length);
  const p0 = emailCalls[0] || { template_params: {} };
  ok(p0.service_id === 'service_test' && p0.template_id === 'template_test' && p0.user_id === 'pk_test', 'le payload contient service_id / template_id / user_id (clé publique)');
  ok(p0.template_params.to_email === 'prof@universite.fr' && !!p0.template_params.message_html, 'template_params : to_email + message_html');
  await click('[data-a="email-save"]');

  console.log('\n# Test en conditions réelles');
  await nav('dashboard');
  await click('[data-a="real-test"]');
  await page.fill('#rt-name', 'Camille'); await page.fill('#rt-mail', 'prof@universite.fr'); await page.fill('#rt-phone', '06 12 34 56 78');
  await click('[data-a="real-test-go"]');
  let s = await state();
  const t = s.find(i => i.client.includes('(test)'));
  ok(t && t.rem.join() === 'email:queued,whatsapp:queued', 'la facture de test prépare 1 e-mail + 1 WhatsApp à valider', t && t.rem);
  const before = emailCalls.length;
  await click('[data-a="approve-all"]'); await page.waitForTimeout(4500);
  const real = emailCalls.slice(before);
  ok(real.length === 1 && real[0].template_params.to_email === 'prof@universite.fr', 'approve-all : UN seul e-mail réel, vers le testeur', real.map(c => c.template_params.to_email));
  s = await state();
  ok(s.filter(i => !i.client.includes('(test)') && i.rem.some(r => r.includes('/real'))).length === 0, 'les clients fictifs (.example) ne reçoivent jamais d’envoi réel');
  ok(s.some(i => i.rem.includes('email:sent/sim')), 'les clients fictifs sont en envoi simulé');
  const tt = s.find(i => i.client.includes('(test)'));
  ok(tt.rem.join() === 'email:sent/real,whatsapp:ready', 'test : e-mail envoyé en réel, WhatsApp « prêt »', tt.rem);

  console.log('\n# WhatsApp (click-to-chat)');
  const href = await page.$eval('a[data-a="wa-sent"]', a => a.getAttribute('href'));
  ok(href.startsWith('https://wa.me/33612345678?text='), 'lien wa.me avec numéro normalisé (06… → 33…)', href.slice(0, 50));
  ok(decodeURIComponent(href).includes('pay?n='), 'le message WhatsApp contient le lien de paiement');
  const popup = ctx.waitForEvent('page', { timeout: 3000 }).catch(() => null);
  await click('a[data-a="wa-sent"]'); const pop = await popup; if (pop) await pop.close();
  await page.waitForTimeout(300);
  s = await state();
  ok(s.find(i => i.client.includes('(test)')).rem.join() === 'email:sent/real,whatsapp:sent/wa', 'après le clic, le message WhatsApp est marqué envoyé');

  console.log('\n# Page de paiement + mise à jour en direct');
  const link = await page.evaluate(() => { const S = window.__PR.S; const i = S.invoices.find(x => x.client.includes('(test)')); const q = new URLSearchParams({ n: i.id, m: String(i.amount), c: i.client, f: S.user.first + ' ' + S.user.last }); return location.href.split('#')[0] + '#/pay?' + q; });
  const pp = await ctx.newPage(); pp.on('pageerror', e => errors.push('pay: ' + e.message));
  await pp.goto(link); await pp.waitForTimeout(400);
  ok((await pp.$eval('.pay-amount', e => e.innerText)).includes('150'), 'la page de paiement affiche le montant de la facture');
  await pp.fill('#pc-n', '4242424242424242'); await pp.click('#pay-go'); await pp.waitForTimeout(1800);
  ok(await pp.$eval('#pay-ok', e => !e.hidden), 'paiement confirmé côté client');
  await page.waitForTimeout(500);
  s = await state();
  ok(s.find(i => i.client.includes('(test)')).st === 'paid', 'la plateforme passe la facture en « payée » en direct (BroadcastChannel)');
  await pp.close();

  console.log('\n# Mise en demeure par e-mail');
  await nav('recouvrement');
  const b2 = emailCalls.length;
  await click('[data-a="demeure"][data-id="97"]'); await click('[data-a="dem-send"]'); await page.waitForTimeout(700);
  ok(emailCalls.length === b2, 'mise en demeure à un client fictif : simulée, aucun appel réseau');
  ok((await state()).find(i => i.id === '97').rem.includes('email:sent/sim'), 'la mise en demeure est tracée dans l’historique');

  console.log('\n# Échec d’envoi');
  emailMode = 'fail';
  await nav('clients');
  await click('[data-a="client-edit"][data-id="c3"]'); await page.fill('#ce-mail', 'vraie.personne@gmail.com'); await click('[data-a="client-save"]');
  await nav('factures');
  const n0 = (await state()).find(i => i.id === '97').rem.length;
  await click('tr[data-id="97"] [data-a="compose"]'); await click('[data-a="cm-send"]'); await page.waitForTimeout(1600);
  const n1 = (await state()).find(i => i.id === '97').rem.length;
  ok(n1 === n0, 'un échec EmailJS n’enregistre pas de relance « envoyée »', { n0, n1 });
  const toast = (await page.$$eval('.toast', e => e.map(x => x.innerText))).slice(-1)[0] || '';
  ok(/Échec/.test(toast), 'un message d’erreur explicite est affiché', toast);

  console.log('\n# Lien de démo (#cfg=)');
  const cfg = { emailjs: { service: 'svc', template: 'tpl', key: 'pk' }, publicUrl: '', payTpl: '' };
  const link2 = URL + '#cfg=' + Buffer.from(unescape(encodeURIComponent(JSON.stringify(cfg))), 'binary').toString('base64');
  const c2 = await browser.newContext(); const p2 = await c2.newPage();
  await c2.route('https://fonts.googleapis.com/**', r => r.abort());
  await p2.goto(link2); await p2.waitForTimeout(1000);
  ok((await p2.evaluate(() => document.body.innerText)).includes('envoi réel actif'), 'le lien #cfg= active l’envoi réel chez le visiteur');
  ok((await p2.evaluate(() => location.hash)) === '', 'le hash de configuration est retiré de l’URL après lecture');
  await c2.close();

  console.log('\n# Responsive');
  const m = await browser.newContext({ viewport: { width: 390, height: 844 } }); const mp = await m.newPage();
  await m.route('https://fonts.googleapis.com/**', r => r.abort());
  await mp.goto(URL); await mp.waitForTimeout(700); await mp.evaluate(() => window.__PR.A['tour-end']());
  const overflow = await mp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(overflow <= 1, 'pas de défilement horizontal sur mobile (390 px)', overflow);
  await m.close();

  ok(errors.length === 0, 'aucune erreur JavaScript pendant tout le parcours', errors);
  await browser.close(); server.close();
  console.log(`\n${passed} réussis, ${failed} échoués`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
