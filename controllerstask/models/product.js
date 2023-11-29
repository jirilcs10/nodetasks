const fs=require('fs');
const path=require('path');
const root=require('../util/path');
const p=path.join(root,'files','products.json');

const getProductsFromFile=(cb)=>{
    fs.readFile(p,(err,data)=>{
        if(err)
        cb([]);
        else
        cb(JSON.parse(data));
    })
}
module.exports=class Product{
    constructor(t){
        this.title=t;
    }
save(){
    getProductsFromFile(products=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),err=>{
            console.log(err);
        });
    });
}
static fetchAll(cb){
  getProductsFromFile(cb);
}
}