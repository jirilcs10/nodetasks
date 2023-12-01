const User = require('../models/users');

exports.postUser = async (req,res,next)=>{
  try{
    if(!req.body.number)
    throw new Error("Phone number required")

  const name = req.body.name;
  const mail= req.body.mail;
  const phno = req.body.phno;
  console.log(name);
  const data=await User.create({
    name:name,
    mail:mail,
    phno:phno
  });
  res.status(201).json({newUserDetail:data})
}
catch(err)
{
    res.status(505).json({eror:err});
}
 };

 exports.getAllUser=async (req,res,next)=>{
    try{
        
        const data=await User.findAll();
        console.log(data);
        res.status(201).json({newUserDetail:data})
      }
      catch(err)
      {
        res.status(505).json({eror:err});
      }
 }
 exports.deleteUser=async (req,res,next)=>{
    try{
        const uid=req.params.id;
        await User.destroy({where:{id:uid}})
        console.log(uid);
        res.status(201).json("success");
      }
      catch(err)
      {
          res.status(505).json({error:err});
      }
 }