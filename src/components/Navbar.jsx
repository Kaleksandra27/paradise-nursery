import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav style={{ padding: "10px", background: "lightgreen" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/plants">Plants</Link> |{" "}
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;
