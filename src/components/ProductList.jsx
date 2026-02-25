import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Monstera", price: 25, category: "Tropical" },
  { id: 2, name: "Palm", price: 30, category: "Tropical" },
  { id: 3, name: "Snake Plant", price: 20, category: "Succulent" },
  { id: 4, name: "Aloe Vera", price: 15, category: "Succulent" },
  { id: 5, name: "Orchid", price: 35, category: "Flowering" },
  { id: 6, name: "Peace Lily", price: 28, category: "Flowering" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id =>
    cartItems.some(item => item.id === id);

  return (
    <>
      <Navbar />
      <h2>Our Plants</h2>

      {plants.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button
            onClick={() => dispatch(addItem(plant))}
            disabled={isInCart(plant.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductList;
