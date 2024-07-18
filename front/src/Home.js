import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const [data, setdata] = useState([]);
  const [loader,setLoader]=useState("true")

  const fetchInfo = () => {
    return fetch("http://localhost:5000/product/get")
      .then((res) => res.json())
      .then((d) => {
        // Encode image URLs before setting them in state
        const encodedData = d.map(item => ({
          ...item,
          src: encodeURIComponent(item.src)

        }));
        setdata(encodedData);
        setLoader("false")
        toast.success("Done")
      }).catch((err)=>console.log(err))
    
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
    <ToastContainer /> 
        {loader=="true" ? <Loader />:
      <>
      
      <div className="scroll">
       <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
       <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" width="144" height="180" alt="restaurants curated for pizza"></img>
       
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
       <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" width="144" height="180" alt="restaurants curated for pizza"></img>
       
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
       <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" width="144" height="180" alt="restaurants curated for pizza"></img>
       
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
       <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" width="144" height="180" alt="restaurants curated for south indian"></img>
        <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" width="144" height="180" alt="restaurants curated for pizza"></img>
        
       
      </div>
      <div className="restaruant">
        <h3>Top restaurants in India</h3>
      </div>
      <footer>
        <div className="component">
          {data.map((val) => {
            return (
              <div className="card">
                {/* Decode image URL before rendering */}
                <Link to={`/product/${val.name}/${val.src}`}><img src={decodeURIComponent(val.src)} alt={val.name}></img></Link>
                <h4>{val.name}</h4>
              </div>
            )
          })}
        </div>
        
      </footer>
     
    </>
}
    </>
  )
}
