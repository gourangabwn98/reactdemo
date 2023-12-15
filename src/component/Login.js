import React, { useState } from 'react'

function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);

    const submitForm=(e)=>{
        e.preventDefault();
        if(email && password)
        {
            const newEntry= {id:new Date().getTime().toString(),email ,password};
            setAllEntry([...allEntry,newEntry]);
            console.log(allEntry);
        }
        else
        alert("plz fill the data");
       
    }

  return (
    <div>
    <div>login page</div>
    <form action='' onSubmit={submitForm}>
    <div>
        <label htmlFor='email' >Email</label>
        <input 
            type='text'
            name='email'
            autoComplete='off'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
        />
    </div>

    <div>
        <label htmlFor='password' >Password</label>
        <input 
            type='text'
            name='password'
            autoComplete="off"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
        />
    </div>
    <button>Login</button>

    </form>

    <div>
        {
            allEntry.map((currEle)=>{
                return<div>
                 <p>Email: {currEle.email}</p>
                <p>Password: {currEle.password}</p>
                </div>
               
            })
        }
    </div>
    </div>
  )
}

export default Login