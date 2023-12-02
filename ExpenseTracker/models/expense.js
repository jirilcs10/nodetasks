const Sequelize=require('sequelize');
const sequelize=require('../util/databases');

const Exp=sequelize.define('expenses',{
  id:{
   type:Sequelize.INTEGER,
   autoIncrement:true,
   allowNull:false,
   primaryKey:true
  },
  amount:{
    type:Sequelize.DOUBLE,
    allowNull:false,
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  category:{
    type:Sequelize.STRING,
    allowNull:false,
  }
});

module.exports=Exp;