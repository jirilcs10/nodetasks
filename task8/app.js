
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {   fs.readFile('message.txt',(err,data="") =>{
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write(`<body><p>${data}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>`)
        res.write('</html>');
        res.end();
    })
        
    }
    if(req.url==="/message" && req.method==="POST")
    {   const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            const message=parsedbody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode=302; 
                res.setHeader('Location','/');
                return res.end();
            });   
        });   
    }
    
});
server.listen(4000);