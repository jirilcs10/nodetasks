const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodetest',
    password:'sqlismysql'
});

module.exports = pool.promise();
