import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductDetails = () => {
  const { productid } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/productsData/${productid}`)
      .then((d) => d.json())
      .then((res) => setUser(res));
  }, []);
  console.log(user)
  //     }
  return (
    <div>
        
      <h1>Product Name: {user.name}</h1>
     <h2>Price: {user.price} </h2>
    </div>
  );
};

//https://reqres.in//api/users/2
