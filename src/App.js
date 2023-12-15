import React from 'react';
import './App.css';
import RulesHook from './component/RulesHook'
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
import Deleteone from './component/Deleteone';
import Login from './component/Login';
import UseEffect1 from './component/UseEffect1';
import UseEffect2 from './component/UseEffect2';
import Signin from './component/Signin';
import CardApi from './component/CardApi';
import { useContext } from 'react';
import { AppContext, useGlobalContext } from './component/context';
import { Route, Router, Routes } from 'react-router-dom';





function App() {
  const data=useGlobalContext(); 
 return (
<div class='App'>
<div>this is App page {data}</div>


    {/* <RulesHook />
    <br/>
    <hr/>
   
    
    <br/>
    <hr/>
    <UseStateObject />
    <br/>
    <hr/>
    <Deleteone /> */}
    {/* <Login /> */}
    {/* <UseEffect1 /> */}
    {/* <UseStateObject /> */}
    {/* <UseStateArray /> */}
    <Signin />
    {/* <CardApi /> */}
</div>
  );
}

export default App;
