const Sequelize=require('sequelize');
const sequelize=require('../util/databases');

const Post=sequelize.define('post',{
  id:{
   type:Sequelize.INTEGER,
   autoIncrement:true,
   allowNull:false,
   primaryKey:true
  },
  title:{
    type:Sequelize.STRING,
    allowNull:false
  },
  author:{
    type:Sequelize.STRING,
    allowNull:false
    
  },
  pcontent:{
    type:Sequelize.TEXT,
    allowNull:false
    
  }
});

module.exports=Post;