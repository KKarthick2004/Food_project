import { useState } from "react";
import {Form }from "./signin"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useCookies} from "react-cookie"
import {ToastContainer,toast} from "react-toastify"

 function SignIn(){
    const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [cookie,setcookie]=useCookies(['user'])
   const navigate=useNavigate()
   async function handleSubmit(e){
     e.preventDefault()
     try{
        const response=await axios.post("http://localhost:5000/register/login",{name,password})
        
        console.log(cookie.user)
        if(response.data=="admin"){
          setcookie("user",name,{path:"/"})
          navigate("/admin")
          
        }
        else if(response.data=="login"){
          setcookie("user",name,{path:"/"})
          navigate("/")
          toast.success("logged")
        }
        else{
          console.log("login failed")
          toast.error("Login failed")
        }
     }
     catch(err){
        console.log(err)
     }

   }
    return (
        <>
        <ToastContainer/>
       <Form  name={name} password={password} title={"SignIn"} button={"Login"} setName={setName} setPassword={setPassword}handleSubmit={handleSubmit} />
        </>
    )
}

export default SignIn