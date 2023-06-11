import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="navbar">
        <h4>Squares R Us</h4>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
