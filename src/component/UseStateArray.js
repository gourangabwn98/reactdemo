import React, { useState } from 'react'

function UseStateArray() {
    
    var Data=[
        {
            id:1,
            name:"Gouranga Ghosh",
            age:24
        },
        {
            id:2,
            name:"Sneha Dutta",
            age:22
        },
        {
            id:3,
            name:"Malati Ghosh",
            age:36
        },
        {
            id:4,
            name:"Shyamal Ghosh",
            age:46
        }
    ]
    
    const[Array,newArray]=useState(Data);
    

    const cleararray=()=>{
        
           newArray([]);
}

const  removeElement=(id)=>{
    const arr=Array.filter((item=>{
        return item.id!=id;
    }))
    newArray(arr);
   
}

  
  return (
    <div>
    <div  class="card">
    <div>
{
 Array.map((item)=>{
return (
    <div>
    <h1 >Name: {item.name} && age:{item.age}
    <button class="removebtn" onClick={()=>removeElement(item.id)}>remove</button>
    </h1>
   
    </div>
  
    
    
)
 }) 

    
}
    
    </div>
   

    </div>
   
    
    <button class="btn" onClick={cleararray}>All Clear</button>
    </div>
  )
}

export default UseStateArray