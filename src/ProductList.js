// ProductList.js
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {data.length > 0 &&
          data.map((proList) => (
            <div key={proList.id}>
              <hr></hr>
              <img src={proList.images} alt="" />
              <hr></hr>
              {proList.title}
              <br></br> <span> Price = </span>
              {proList.price}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
