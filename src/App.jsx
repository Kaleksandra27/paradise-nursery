import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery 🌿</h1>
              <Link to="/plants">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
