const form=document.getElementById("addForm");
let id1=null;
let itli=document.getElementById("items");
form.addEventListener("submit",submitForm);

const obj={
    amount:5,
    des:"abc",
    cat:"abc"
}
function showOnScreen(appdata){
    const li=document.createElement("li");
    const btn=document.createElement("button");
    const editb=document.createElement("button");
    const hid=document.createElement("P");
    hid.hidden=true;

    btn.className="btn btn-danger btn-sm float-right del";
    editb.className="btn btn-dark btn-sm float-right edit";

    btn.appendChild(document.createTextNode("Delete"));
    editb.appendChild(document.createTextNode("Edit"));
    hid.appendChild(document.createTextNode(appdata.id))

    li.className="list-group-item";
    
    li.appendChild(document.createTextNode(appdata.amount));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.description));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.category));
    li.appendChild(document.createTextNode(" "));

    li.appendChild(hid);
    li.appendChild(btn);
    li.appendChild(editb);

    itli.appendChild(li);
}

async function submitForm(e)
{  
    e.preventDefault();
   
   
    obj.amount=document.getElementById('exp').value;
    obj.des=document.getElementById('expdes').value;
    obj.cat=document.getElementById('cat').value;
    let resp;
    try
    {
        if(id1!==null)
        {
             resp =await axios.post(`http://localhost:3000/expense/${id1}`,obj);
        }
        else{
             resp =await axios.post(`http://localhost:3000/expense`,obj); 
        }
    console.log(resp.data.newExpense);
    showOnScreen(resp.data.newExpense);
    }
    catch(err){
        
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    }
    
    document.getElementById('exp').value="";
    document.getElementById('expdes').value="";
    document.getElementById('cat').value="";
   
}

window.addEventListener("DOMContentLoaded",async()=>{
    try{
    let res=await axios.get('http://localhost:3000/expenses');
        console.log(res);
        for(var i=0;i<res.data.newExpense.length;i++)
        showOnScreen(res.data.newExpense[i]);
    }
    catch(err){
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    }
});

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