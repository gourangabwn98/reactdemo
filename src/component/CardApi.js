import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGlobalContext } from './context';


function CardApi() {
  // let isLoading=true;
  const name=useGlobalContext();

  let API="http://hn.algolia.com/api/v1/search?query=HTML";

const fatchdata=(async(uri)=>{
  try{
    const res=await fetch(uri);
    const data=await res.json();
    console.log(data);
  }catch(error){
console.log("error");
  }


})

  useEffect(()=>{

    fatchdata(API);

  },[])
  return (
    <div>
 this is context page {name};

    </div>
   
  );
}

export default CardApi;