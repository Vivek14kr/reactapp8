import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./table.css"

// import { Link } from "react-router-dom";
export const Products = () => {
  const [productno, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/productsData`)
      .then((res) => {
         return res.json();
      })
      .then((res) => {
        setProduct(res);
      });
  }, []);
  console.log(productno,"kjf")
  //     }
  return (
    <>
      {/* <h1>eh</h1> */}

      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>Info</th>
          </tr>

          {productno.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <Link to={`/products/${e.id}`}>More Details</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
// const cardData = () => {
//     fetch("http://localhost:3005/data")
//       .then((res) => {
//         return res.json();
//       })
//       .then((r) => {
//         setCards(r);
//       });
//   };
