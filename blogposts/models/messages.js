const Sequelize=require('sequelize');
const sequelize=require('../util/databases');

const Message=sequelize.define('message',{
  id:{
   type:Sequelize.INTEGER,
   autoIncrement:true,
   allowNull:false,
   primaryKey:true
  },
  mcontent:{
    type:Sequelize.TEXT,
    allowNull:false,
    
  }
});

module.exports=Message;