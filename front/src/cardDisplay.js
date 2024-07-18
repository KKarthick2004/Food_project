import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function CardDisplay() {
  const [data, setData] = useState([]); 
  const [total,setTotal]= useState(0)
  const {user}= useParams()
   function Delete(food){
      axios.post("http://localhost:5000/card/delete",{user,food})
  }

  useEffect(() => {
    const display = async () => {
      try {
        const response = await fetch("http://localhost:5000/card/display", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }), // Send the user data as JSON
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result); // Assuming the response is JSON and contains the data you need
      } catch (err) {
        console.error('Error fetching card details:', err);
      }
    };

    display();
  },);
 
  return (
    <>
      <h3>Product</h3>
      <div>
      <div className="ss">
        {data.length > 0 ? (
          data.map((item) => (
              <div className="sss">
              <img src={item.src}></img>
              <h4>{item.food}</h4>
              <p>{item.card}</p>
              <button className='delete' onClick={()=>Delete(item.food)}>delete</button>
              </div>
           
          ))
        ) : (
          <p>No data available</p>
        )}
         </div>
      </div>
    </>
  );
}

export default CardDisplay;
