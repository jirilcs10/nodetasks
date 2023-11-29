const path=require('path');
const root=require('../util/path');
exports.getContactPage=(req,res,next)=>{
    res.sendFile(path.join(root,'views','contact.html'));
};
exports.getSuccessPage=(req,res,next)=>{
    res.sendFile(path.join(root,'views','success.html'));
};