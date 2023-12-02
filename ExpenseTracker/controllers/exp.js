const Exp = require('../models/expense');

exports.postExp = async (req,res,next)=>{
  try{
  const amount = req.body.amount;
  const description= req.body.des;
  const category= req.body.cat;
  console.log(amount);
  const data=await Exp.create({
    amount:amount,
    description:description,
    category:category
  });
  res.status(201).json({newExpense:data})
}
catch(err)
{
    res.status(505).json({eror:err});
}
 };

 exports.editExp = async (req,res,next)=>{
  try{
  const uid=req.params.uid;
  const amount = req.body.amount;
  const description= req.body.des;
  const category= req.body.cat;
  console.log(amount);
  const data=await Exp.update({amount:amount},{description:description},{category:category},{where:{id:uid}});
  res.status(201).json({newExpense:data})
}
catch(err)
{
  console.log(err);
    res.status(505).json({eror:err});
}
 };

 exports.getAllExp=async (req,res,next)=>{
    try{
        
        const data=await Exp.findAll();
        console.log(data);
        res.status(201).json({newExpense:data})
      }
      catch(err)
      {
        res.status(505).json({eror:err});
      }
 }
 
 exports.deleteExp=async (req,res,next)=>{
 const editMode=req.query.edit;
 if(editMode){
  try{
      const uid=req.params.id;
      const data=await Exp.findByPk(uid);
      console.log(uid);
      res.status(201).json({newExpense:data});
    }
    catch(err)
    {
        res.status(505).json({error:err});
    }
  }
  else{
    try{
      const uid=req.params.id;
      await Exp.destroy({where:{id:uid}})
      console.log(uid);
      res.status(201).json("success");
    }
    catch(err)
    {
        res.status(505).json({error:err});
    }
  }
}

 