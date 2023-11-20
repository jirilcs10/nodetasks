const name="JCS";
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    console.log(name);
});
server.listen(4000);