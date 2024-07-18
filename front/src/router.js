import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Nav from "./nav"
import SignUp from "./signin"
import SignIn from "./signup"
import { Home } from "./Home"
import Productdetails from "./Productdetails"
import CardDisplay from "./cardDisplay"
import Admin from "./Admin"
import { useCookies } from "react-cookie"

function Routing(){
    const cookie=useCookies(["user"]);
   return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home/>} />
                 <Route path="signup" element={<SignUp />}></Route>
                 <Route path="signIn" element={<SignIn />}></Route>
                 <Route path="product/:name/:src" element={<Productdetails />}></Route>
                 <Route path="admin" element={<Admin />}></Route>
                 <Route path="/display/:user" element={<CardDisplay />}></Route>
            </Routes>
        </Router>
  )
}

export default Routing