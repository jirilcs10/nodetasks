const form=document.getElementById("my-form");
var id1;
const itli=document.getElementById("items");
const container=document.getElementById("main");
form.addEventListener("submit",submitForm);

const obj={
    title:'abc',
    author:"abc@gmail.com",
    pcontent:"974532145"
}
const mobj={
    pid:1,
    mcontent:"974532145"
}

function submitForm(e)
{   e.preventDefault();
    obj.title=document.getElementById('title').value;
    obj.author=document.getElementById('author').value;
    obj.pcontent=document.getElementById('post').value;
    console.log(obj)
    
  
    axios.post('http://localhost:3000/createpost',obj)
    .then(response=>{
        console.log(response.data.newPost);
        showOnScreen(response.data.newPost);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })
    
    document.getElementById('title').value="";
    document.getElementById('author').value="";
    document.getElementById('post').value="";
   
     
}
async function messagesend(e){
    e.preventDefault();
    mobj.mcontent=document.getElementById("msend").value;
    const t=e.target.parentElement;
    const id=t.childNodes[0].textContent;
    console.log(id);
    mobj.pid=id;
    let res=await axios.post('http://localhost:3000/createmessage',mobj);
    console.log(res);
}
function messagedisplay(mdetails){
    for(let i=0;i<mdetails.length;i++)
    {
    const cont=document.getElementById(`mdiv${mdetails[i].postId}`);
    const p=document.createElement('p');
    const b=document.createElement('button');
    const id=mdetails[i].id;
    const pid=mdetails[i].postId
    b.id=mdetails[i].id;
    b.text="x";
    p.appendChild(document.createTextNode(mdetails[i].mcontent));
    const hr=document.createElement('hr');
    p.appendChild(b);
    cont.appendChild(p);
    cont.appendChild(hr);
    b.addEventListener('click',async ()=>{
        let res=await axios.post(`http://localhost:3000/deleteemessage/${id}/${pid}`);
        console.log(res);
    });

    }
}
function postdisplay(pdetails){
    const hid=document.createElement("P");
    hid.hidden=true;
    hid.appendChild(document.createTextNode(pdetails.id));
    const title=document.createElement('h3');
    title.appendChild(document.createTextNode(pdetails.title));
    const head=document.createElement('h6');
    head.appendChild(document.createTextNode(`Author:${pdetails.author}`));
    const p=document.createElement('p');
    p.appendChild(document.createTextNode(pdetails.pcontent));
    const m=document.createElement('input');
    m.type='text';
    m.id=`msend${pdetails.id}`;
    const msubmit=document.createElement('button');
    const text = document.createTextNode("send");
    msubmit.appendChild(text);
    
    const div =document.createElement('div');
    div.id=`mdiv${pdetails.id}`;
    
    container.appendChild(hid);
    container.appendChild(title);
    container.appendChild(head);
    container.appendChild(p);
    container.appendChild(m);
    container.appendChild(msubmit);
    container.appendChild(div);
    
    msubmit.addEventListener('click',async ()=>{
        mobj.mcontent=document.getElementById(`msend${pdetails.id}`).value;
        mobj.pid=pdetails.id;
        console.log(mobj);
        let res=await axios.post('http://localhost:3000/createmessage',mobj);
        console.log(res);
    });


}
// async function mdisplay(e)
// {   
//     e.preventDefault();
//     console.log(2);
//      const t=e.target.parentElement;
//      const id=t.childNodes[1].textContent;
//      console.log(id);
    
    
// }
async function blogdisplay(e)
{   
    e.preventDefault();
    console.log(1);
     const t=e.target.parentElement;
     const id=t.childNodes[1].textContent;
     console.log(id);
    let res=await axios.get(`http://localhost:3000/dispblog/${id}`)
    console.log(res.data);
    postdisplay(res.data);
    let mes=await axios.get(`http://localhost:3000/dispmessage/${id}`)
    console.log(mes.data);
    messagedisplay(mes.data);
    
}
function showOnScreen(appdata){
    
    const li=document.createElement("li");
    let a= document.createElement('button');
    const hid=document.createElement("P");
    hid.hidden=true;
    hid.appendChild(document.createTextNode(appdata.id))
    const text = document.createTextNode("+");
    a.appendChild(text);
    li.appendChild(document.createTextNode(appdata.title));
    li.appendChild(hid);
    li.appendChild(a);
    itli.appendChild(li);
    a.addEventListener('click',blogdisplay);
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('http://localhost:3000/posts')
    .then(response=>{

        console.log(response);
        for(var i=0;i<response.data.newPost.length;i++)
        showOnScreen(response.data.newPost[i]);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })
})

   


