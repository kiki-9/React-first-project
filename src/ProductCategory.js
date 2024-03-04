import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCategory.css";
// Make sure to import ProductList

const ProductCategory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    // Navigate to the "/productList" route when the div is clicked
    navigate("/productList");
  };

  return (
    <div>
      <h1>New Collection</h1>
      <div className="categoryHead">
        {data.length > 0 &&
          data.map((category) => (
            <div key={category.id} onClick={handleClick} className="category">
              <div className="margin">
                <img className="photooo" src={category.image} alt="" />
              </div>

              {category.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCategory;
