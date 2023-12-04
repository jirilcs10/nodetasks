const form=document.getElementById("addform");
let id1=null;
let num1=1;
let num2=1;
const btn1=document.getElementById("addfield");
btn1.addEventListener('click',addField);

const container=document.getElementById("main1");
let itli=document.getElementById("items");
const btn2=document.getElementById("sub");
btn2.addEventListener("click",submitForm);

const obj={
    name:"abc",
    field:[],
    type:[],
    number:0
}
function addField(e){
    e.preventDefault();
    const field =document.createElement('input');
    field.type="text";
    field.id=`field${num1++}`;
    console.log(field.id);
    const array = ["INTEGER","BOOLEAN","DOUBLE","STRING","JSON"];
    const type = document.createElement("select");
     type.id = `type${num2++}`;
     const br=document.createElement('br');
     container.appendChild(field);
    container.appendChild(type);
    container.appendChild(br);
    console.log(type.id);
for (let i = 0; i < array.length; i++) {
    const option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    type.appendChild(option);
}
    
}
// function showOnScreen(appdata){
//     const li=document.createElement("li");
//     const btn=document.createElement("button");
//     const editb=document.createElement("button");
//     const hid=document.createElement("P");
//     hid.hidden=true;

//     btn.className="btn btn-danger btn-sm float-right del";
//     editb.className="btn btn-dark btn-sm float-right edit";

//     btn.appendChild(document.createTextNode("Delete"));
//     editb.appendChild(document.createTextNode("Edit"));
//     hid.appendChild(document.createTextNode(appdata.id))

//     li.className="list-group-item";
    
//     li.appendChild(document.createTextNode(appdata.amount));
//     li.appendChild(document.createTextNode("-"));
//     li.appendChild(document.createTextNode(appdata.description));
//     li.appendChild(document.createTextNode("-"));
//     li.appendChild(document.createTextNode(appdata.category));
//     li.appendChild(document.createTextNode(" "));

//     li.appendChild(hid);
//     li.appendChild(btn);
//     li.appendChild(editb);

//     itli.appendChild(li);
// }

async function submitForm(e)
{  
    e.preventDefault();
   
   
    obj.name=document.getElementById('tname').value;
    obj.number=num1;
    console.log(obj.name);
    for(let i=0;i<num1;i++)

    {  console.log(`field${i}`)
        const f= document.getElementById(`field${i}`).value;
    const t=document.getElementById(`type${i}`).value;

        obj.field.push(f);
        obj.type.push(t);
    }
    console.log(obj)
    let resp;
    try
    {
    resp =await axios.post(`http://localhost:3000/createtable`,obj); 
    
    console.log(resp);
    }
    catch(err){
        
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    }
    
    // document.getElementById('exp').value="";
    // document.getElementById('expdes').value="";
    // document.getElementById('cat').value="";
   
}

// window.addEventListener("DOMContentLoaded",async()=>{
//     try{
//     let res=await axios.get('http://localhost:3000/expenses');
//         console.log(res);
//         for(var i=0;i<res.data.newExpense.length;i++)
//         showOnScreen(res.data.newExpense[i]);
//     }
//     catch(err){
//         document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
//         console.log(err);
//     }
// });

itli.addEventListener("click", removeItem);
async function removeItem(e){
    e.preventDefault();

    form.classList.remove('was-validated')
    if(e.target.classList.contains('del'))
    {
           
            const li=e.target.parentElement;
            const id=li.childNodes[6].textContent;
            console.log(id);
            try{
            await axios.get(`http://localhost:3000/deleteexp/${id}`);
            itli.removeChild(li); 
            }
            catch(err)
            {
                document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
                console.log(err); 
            }
            
           

    }
   
}

itli.addEventListener("click", editItem);
async function editItem(e){
    e.preventDefault();
    
    if(e.target.classList.contains('edit'))
    {
           
            const li=e.target.parentElement;
            id1=li.childNodes[6].textContent;
            try{
                const res=await axios.get(`http://localhost:3000/deleteexp/${id1}?edit="true"`);
                document.getElementById("exp").value=res.data.newExpense.amount;
                document.getElementById("expdes").value=res.data.newExpense.description;
                document.getElementById("cat").value=res.data.newExpense.category;
                itli.removeChild(li); 
                }
                catch(err)
                {
                    document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
                    console.log(err); 
                }
            
            
            
           

    }
   
}