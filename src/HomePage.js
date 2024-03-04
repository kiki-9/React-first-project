import React from "react";
import { Link } from "react-router-dom";

const Home2 = () => {
  const Home = () => {
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        <p>This is the content of your home page.</p>
        <Link to="/productCategory">Explore Products</Link>
      </div>
    );
  };

  const something = () => {
    return <div>Hello</div>;
  };

  return (
    <div>
      <h2>Home2 Component</h2>
      <Home />
      {something()}
    </div>
  );
};

export default Home2;
