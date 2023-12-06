const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');

const sequelize=require('./util/databases');
const Message=require('./models/messages');
const Post=require('./models/posts');

const app = express();
app.use(cors());

// const userRoutes = require('./routes/userroute');
app.use(bodyParser.json({ extended: false }));
  

// app.use(userRoutes);
Message.belongsTo(Post,{constraints:true,onDelete:'CASCADE'});
Post.hasMany(Message);

app.use('/createpost',async (req,res,next)=>{
  const title = req.body.title;
  const author= req.body.author;
  const pcontent = req.body.pcontent;
  console.log(title);
  const data=await Post.create({
   title:title,
   author:author,
   pcontent:pcontent
  });
  res.status(201).json({newPost:data})
});
app.use('/dispblog/:id',async(req,res,next)=>{
    let pid=req.params.id;
    console.log(pid);
    
    let data=await Post.findByPk(pid);
    console.log(data);
    res.status(201).json(data)
 });
 app.use('/createmessage',async(req,res,next)=>{
    
  const pid = req.body.pid;
  const mcontent = req.body.mcontent;
  console.log(pid);
  const data=await Message.create({
   postId:pid,
   mcontent:mcontent
  });
  res.status(201).json(data);
 });
 app.use('/dispmessage/:id',async(req,res,next)=>{
    const pid=req.params.id;
    console.log(pid);
    
    const data=await Message.findAll({where:{postId:pid}});
    console.log(data);
    res.status(201).json(data);
 })
 app.use('/posts',async(req,res,next)=>{
   
    const data=await Post.findAll();
    console.log(data);
    res.status(201).json({newPost:data});
 })
 app.use('/deletemessage/:id/:pid',async(req,res,next)=>{
   const id=req.params.id;
   const pid=req.params.pid;
   console.log(id)
   console.log(pid);
    const data=await Message.findByPk({where:{id:id,postId:pid}});
    console.log(data);
    res.status(201).json({newPost:data});
 })

sequelize.sync().then(result=>{
    app.listen(3000);
}).catch(err=>console.log(err));
