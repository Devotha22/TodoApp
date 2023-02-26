const createForm=document.querySelector('form');
const createtodo=async(e)=>{ e.preventDefault();
let data= {
    content:createForm.content.value,

}    
await fetch('http://localhost:3000/todo',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{'content-type':'application/json'}
})

}
createForm.addEventListener('submit',createtodo)
const postDetails= async()=>{
    const searchParam=new URLSearchParams(window.location.search);
    const id= searchParam.get("id");
    const url=`http://localhost:3000/todo/${id}`;
   
    const res=await fetch(url);
    const result=await res.json();
    console.log(result);

    let content=``;

      content+=`
     
     <ul><li>${result.content}</li></ul>
    
     `;      

const myPost = document.getElementById('mytodo-list');
myPost.innerHTML=content;
console.log(result);

    };
window.addEventListener('DOMContentLoaded',()=>postDetails());



