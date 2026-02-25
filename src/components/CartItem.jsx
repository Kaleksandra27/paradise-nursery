import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity
} from "../redux/CartSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <h2>Your Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>
          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </>
  );
}

export default CartItem;
