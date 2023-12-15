import React from 'react'
import { useState } from 'react';

function RulesHook() {
    const[Name,setName]=useState("Gouranga Ghosh")
    const click=()=>{
       (Name==="Gouranga Ghosh")?setName("Sneha Dutta"):setName("Gouranga Ghosh");
    }
  return (
    <div>
    <h1>{Name}</h1>
    <button onClick={click}>click here</button>
    </div>
  )
}

export default RulesHook