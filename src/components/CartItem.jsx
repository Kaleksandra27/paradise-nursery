import { useDispatch, useSelector } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "../redux/CartSlice";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Navbar />
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
              <h4>{item.name}</h4>
              <p>Unit Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <div>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Delete</button>
            </div>
          ))}
          <h3>Total Cart Amount: ${total}</h3>
          <button onClick={() => alert("Coming Soon!")}>Checkout</button>
          <button onClick={() => window.location.reload()}>Continue Shopping</button>
        </div>
      )}
    </>
  );
}

export default CartItem;
