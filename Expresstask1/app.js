
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("Midlleware 1");
    next();
});
app.use((req,res,next)=>{
    console.log("Midlleware 2");
    res.send('<h1>Express Page</h1>');
});


app.listen(4000);