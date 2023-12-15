import React, { useState } from 'react'

function Signin() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allData,setAllData]=useState([]);

const submitdata=(event)=>{
   event.preventDefault();
    const newdata={id:new Date().getTime().toString(),email,password};

    if(email && password){
    setAllData([...allData,newdata]);
    setEmail("");
    setPassword("");
    console.log(allData);
    }
    else{
        alert("fill the data");
    }
}
  return (
    <div>
    <form action="" onSubmit={submitdata}>
    <div>
    <label htmlFor="email" >Email</label>
    <input type='text'
    name='email'
     placeholder='Enter email id'
      id="email" 
      value={email}
      autoComplete='off' 
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>

    <div>
    <label htmlFor="password" >Password</label>
    <input type='password'
     placeholder='Enter password'
      id="passwword" 
      value={password}
      autoComplete='off'
      onChange={(e)=>{setPassword(e.target.value)}}
       />
    </div>
    <button type='submit'>Sign In</button>
    </form>

    <div >
  { allData.map((item)=>{return(
    <div >
    <p>email: {item.email}</p>
    <p>password :{item.password}</p>
    </div>
  )
   })}
    </div>
  
    </div>
  )
}

export default Signin