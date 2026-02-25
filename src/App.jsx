import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      {!showProducts && (
        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      )}
      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
