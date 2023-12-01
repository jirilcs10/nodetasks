var form=document.getElementById("my-form");
var id1;
var itli=document.getElementById("items");
form.addEventListener("submit",submitForm);

var obj={
    name:'abc',
    mail:"abc@gmail.com",
    phno:"974532145"
}

function submitForm(e)
{   e.preventDefault();
    obj.name=document.getElementById('name').value;
    obj.mail=document.getElementById('mail').value;
    obj.phno=document.getElementById('phno').value;
    
  
    axios.post('http://localhost:3000/users',obj)
    .then(response=>{
        console.log(response.data.newUserDetail);
        showOnScreen(response.data.newUserDetail);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })
    
    document.getElementById('name').value="";
    document.getElementById('mail').value="";
    document.getElementById('phno').value="";
   
     
}
function showOnScreen(appdata){
    
    var li=document.createElement("li");
    var btn=document.createElement("button");
    var editb=document.createElement("button");
    var hid=document.createElement("P");
    hid.hidden=true;

    btn.className="del";
    editb.className="edit";

    btn.appendChild(document.createTextNode("Delete"));
    editb.appendChild(document.createTextNode("Edit"));
    hid.appendChild(document.createTextNode(appdata.id))
    
    li.className="list-group-item";

    li.appendChild(document.createTextNode(appdata.name));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.mail));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.phno));
    li.appendChild(hid);
    li.appendChild(btn);
    li.appendChild(editb);
    itli.appendChild(li);
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('http://localhost:3000/users/all')
    .then(response=>{

        console.log(response);
        for(var i=0;i<response.data.newUserDetail.length;i++)
        showOnScreen(response.data.newUserDetail[i]);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })
})

itli.addEventListener("click", removeItem);
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('del'))
    {   
        var li=e.target.parentElement;
        const id=li.childNodes[5].textContent;
        console.log(id);
        axios.get(`http://localhost:3000/deleteuser/${id}`)
          .then(res=>console.log(res))
          .catch(err=>console.log(err));
            itli.removeChild(li); 
        }
    }
   


