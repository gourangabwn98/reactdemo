import React, { useEffect, useState } from 'react'

const UseEffect1=()=> {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        // here we use conditation
        if(count>=1)
        document.title=`chats (${count})`;
         if(count===3)
        alert(`count is ${count}`);
        else
        document.title=`chats`;
       
    });

    console.log("this is out side");
   
  return (
    <div>
    <h1>hello</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>press</button>
    </div>
  )
}

export default UseEffect1