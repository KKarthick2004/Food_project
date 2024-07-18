import { Link } from "react-router-dom"
import "./style.css"
import { useCookies } from "react-cookie"
import logo from "./icon.png"
import { useNavigate } from "react-router-dom"
import png from "./add.png"
import { useEffect } from "react"
import axios from "axios"
function Nav(){
  const[cookie,setcookie,removecookie]=useCookies(['user'])
  const user=cookie.user
  const navigate=useNavigate()
  if(cookie.user){
    // axios.post("",{user})
  }
  function adminpage(){
       navigate("/admin")
  }
 
 
    return (
      <>
      
      <div className="nav-bar">
    <ul>
      <li className="firstNav">
      <Link to="/" >Home</Link> </li>
      <li><Link to="/signup">SignUp</Link></li> 
      <li><Link to="/signIn">SignIn</Link></li>
      {cookie.user==undefined ? console.log() :<li className="navpara"onClick={()=>{removecookie("user");navigate("/")}}>Logout</li> }
      {cookie.user=="admin" ? <li className="navpara" onClick={()=>adminpage()}>Upload</li>:console.log()}
      {cookie.user==undefined || cookie.user=="admin" ? console.log():<><Link to={`/display/${cookie.user}`}><li className="navpara1">Product</li></Link> <img className="add" src={png}></img></>}
    </ul>
  
      </div>
      <div className="logo">
      <img src={logo} alt="icon"></img>
      </div>
     
     
      
      </>
    
    )
}

export default Nav