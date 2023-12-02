const Sequelize=require('sequelize');

const sequelize=new Sequelize('nodetest','root','sqlismysql',{
    dialect:'mysql',
    host:'localhost'
});


module.exports = sequelize;