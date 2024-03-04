// App.js
import React from "react";
// In your React component file

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductCategory from "./ProductCategory"; // Import the new component
import ProductList from "./ProductList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productCategory" element={<ProductCategory />} />
              <Route path="productList" element={<ProductList />} />
            </Routes>
          </main>
        </header>
      </div>
    </Router>
  );
}

export default App;
