import React, { useState } from 'react'

export const UseStateObject = () => {
  const[ArryData,setArryData]=useState({
    name:"Gouranga Ghosh",
    age:23,
    gender:"male",
    address:"aludanga ghosh para"
  })
  const update=()=>{
    setArryData({...ArryData,name:"sneha"});
  }
  return (
    <div class="card">
      <h1>name : {ArryData.name} &  age :{ArryData.age} </h1>
      <button onClick={update}>update</button>
    </div>
  )
}
export default UseStateObject