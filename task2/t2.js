const prod=(a,b)=>a*b;
console.log(prod(5,5))

const student={
    name:"Jcs",
    age:"25",
    course:"Backend",
    display(){
        console.log("Name:"+this.name+" Age:"+this.age+" Course:"+this.course)
    }
}
student.display();