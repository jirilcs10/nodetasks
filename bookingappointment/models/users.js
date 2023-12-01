const Sequelize=require('sequelize');
const sequelize=require('../util/databases');

const User=sequelize.define('users',{
  id:{
   type:Sequelize.INTEGER,
   autoIncrement:true,
   allowNull:false,
   primaryKey:true
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  mail:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  phno:{
    type:Sequelize.INTEGER,
    allowNull:false,
    unique:true
  }
});

module.exports=User;