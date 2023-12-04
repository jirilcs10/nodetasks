const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');

const Sequelize=require('sequelize');
const sequelize=require('./util/databases');
const queryInterface = sequelize.getQueryInterface();

const app = express();
app.use(cors());

const userRoutes = require('./routes/userroute');
app.use(bodyParser.json({ extended: false }));
  

app.use('/createtable',async(req,res,next)=>{
   
    await queryInterface.createTable(`${req.body.name}`,{
    id:
    {type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true}
   });
   for(let i=0;i<req.body.number;i++)
   {
   await queryInterface.addColumn(`${req.body.name}`, `${req.body.field[i]}`, { type:req.body.type[i] });
   }
})
// app.use(userRoutes);

    app.listen(3000);

