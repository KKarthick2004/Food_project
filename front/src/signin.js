import { useState } from "react";
import "./style.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
function SignUp(){
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const navigate=useNavigate()


   async function handleSubmit(e) {
      e.preventDefault();

      try {
         const response = await axios.post("http://localhost:5000/register/register", {name,password });
         console.log(response.data);
         if(response.data=="already exists"){
          toast.error("already exits")
         }
         else{
          toast.success("login success")
          navigate("/signIn")
         }
      } catch (error) {
         console.log("Error:", error);
      }
   }
   

   return(
      <>
      <ToastContainer />
   <Form title={"SignUp"} button={"Register"}  name={name} password={password} setPassword={setPassword} setName={setName} handleSubmit={handleSubmit} />
      </>
   )
}

export function Form({title,button,name,password,handleSubmit,setName,setPassword}) {
  

   return (
      <>
         <div className="container">
           <div className="form">
           <form onSubmit={handleSubmit}>
               <h3>{title}</h3>
               <input id="name" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="email" required />
               <input id="password" type="password" name="password" value={password}onChange={(e)=>setPassword(e.target.value)} placeholder="password" required />
               <button type="submit">{button}</button>
            </form>
           </div>
           
            
         </div>
      </>
   );
}

export default SignUp;
