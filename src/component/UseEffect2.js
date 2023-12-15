import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const[Width,setWidth]=useState(window.screen.width);
    const[Hight,setHight]=useState(window.screen.height);
    // for width
   const actuleWidth=()=>{
    setWidth(window.innerWidth);
   }
  //  for hight
  const actuleHight=()=>{
    setHight(window.innerHeight);
  }
    useEffect(()=>{
        window.addEventListener("resize",actuleWidth);
        window.addEventListener("resize",actuleHight); 
        //  when screen size is change then actuleWidth function is called
        // cleanup function
        return ()=>{
            window.removeEventListener("resize",actuleWidth) ;
            window.removeEventListener("resize",actuleHight);
        }
    })
    
  return (
    <div>
        <h1>THIS IS WINDOW WIDTH</h1>
        <h2>Hight X Width ={Width}X{Hight}</h2>
       
    </div>
  )
}

export default UseEffect2