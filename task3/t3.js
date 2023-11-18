const arr=['apple','oranges','','mango','','lemon']
const newarr=arr.map(a=>{
    if(a=='')
    return "empty string";
    else
    return a;
})
console.log(newarr);