import React, { useState } from 'react'
import axios from 'axios'
import {toast,ToastContainer} from "react-toastify"


export default function Admin() {
   const [name,setname]=useState("")
   const [src,setsrc]=useState("")

    
   function Name(e){
      setname(e.target.value)
   }
   function Src(e){
      setsrc(e.target.value)
   }
   async function product(e){
      e.preventDefault()
      try{
      const res=await axios.post("http://localhost:5000/product/product",{name,src})
       toast.success("added")
      }
      catch(err){
        console.log(err)
      }
   }
  return (
     <>
     <ToastContainer/>
     <form className="admin" onSubmit={product}>
        <h3>Admin Page</h3>
        <input type="text" name="name" onChange={(e)=>Name(e)} placeholder="Food name" required>
        </input>
        <input type="text" name="src" onChange={(e)=>Src(e)} placeholder="Food image source" required>
        </input>
        <button type="submit">Add</button>
        
     </form>
     
     </>
  )
}
