const path=require('path');
const express=require('express');

const bodyParser=require('body-parser');
const app=express();

const root=require('./util/path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact');
const successRoutes=require('./routes/success');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);


app.use((req,res,next)=>{
     res.status(404).sendFile(path.join(root,'views','404.html'));
});


app.listen(4000);