import React, { useState } from 'react'

function Deleteone() {
    
    var Data=[
        {
            id:0,
            name:"Gouranga Ghosh",
            age:24
        },
        {
            id:1,
            name:"Sneha Dutta",
            age:22
        },
        {
            id:2,
            name:"Malati Ghosh",
            age:36
        },
        {
            id:4,
            name:"Shyamal Ghosh",
            age:46
        }
    ]
    
    const[Array,setArray]=useState(Data);
    

    const cleararray=()=>{
           setArray([]);
    }

   const clearone=(id)=>{
       const myNewArray= Array.filter((ele)=>{
               return ele.id!=id;
        })
        setArray(myNewArray)
   }
  return (
    <div>
    <div>
    {
        Array.map((currEle) => {
          return(<h1 className='h1style'>Name: {currEle.name} & Age: {currEle.age}  <button onClick={()=>clearone(currEle.id)}>delete</button> </h1>);})
        
    }
    

    </div>
   
    
    <button onClick={cleararray}>Clear</button>
    </div>
  )
}

export default Deleteone