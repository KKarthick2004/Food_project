import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios"
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Productdetails() {
  const[count,setcount]=useState(0)
  const { name,src} = useParams();
  const decodedName = decodeURIComponent(src);
  const[cookie]=useCookies()
  const user=cookie.user
  const card=count+1
  const food=name
  const navigate=useNavigate();

  async function addcard(){
    if(! cookie.user){
           alert("Should login")
           navigate("/signin")
    }
      try{
        const response= await axios.post("http://localhost:5000/card",{user,card,food,src:decodedName})
      }
      catch(err){
        console.log(err)
      }
      
    
  }
  

  return (
    <>
    <h2 className="hproduct">{name}</h2>
      <img className="product" src={decodedName}></img>
      <div className="cproduct"><p>{count}</p></div> 
      <button className="bproduct" onClick={()=>{setcount(count+1)
      addcard()
      }}>Add to Card</button>
    </>
  );
}

export default Productdetails;
