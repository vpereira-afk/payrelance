// Mini serveur statique sans dépendance : node scripts/serve.cjs [port]
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const port = Number(process.argv[2] || process.env.PORT || 8765);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.pdf':'application/pdf','.md':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png'};
function createServer(){
  return http.createServer((req,res)=>{
    let p = decodeURIComponent((req.url||'/').split('?')[0].split('#')[0]);
    if(p==='/') p='/index.html';
    const f = path.join(root,p);
    if(!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()){ res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});
    fs.createReadStream(f).pipe(res);
  });
}
module.exports = { createServer };
if(require.main === module){
  createServer().listen(port,()=>console.log(`PayRelance → http://localhost:${port}`));
}
