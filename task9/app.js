
const http=require('http');

const route = require('./routes');
// console.log(route.code);
const server=http.createServer(route.handler);

server.listen(4000);