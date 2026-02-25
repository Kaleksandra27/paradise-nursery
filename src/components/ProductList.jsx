import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  // Tropical
  { id: 1, name: "Monstera", price: 25, category: "Tropical", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772" },
  { id: 2, name: "Palm", price: 30, category: "Tropical", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 3, name: "Bird of Paradise", price: 35, category: "Tropical", image: "https://images.unsplash.com/photo-1617196039772-c458a5de0b87" },
  { id: 4, name: "Philodendron", price: 28, category: "Tropical", image: "https://images.unsplash.com/photo-1617196039772-c458a5de0b87" },
  { id: 5, name: "Fiddle Leaf Fig", price: 40, category: "Tropical", image: "https://images.unsplash.com/photo-1580894908361-75f431b81f3d" },
  { id: 6, name: "Calathea", price: 22, category: "Tropical", image: "https://images.unsplash.com/photo-1603021674500-98b0f78a6c3a" },

  // Succulent
  { id: 7, name: "Aloe Vera", price: 15, category: "Succulent", image: "https://images.unsplash.com/photo-1564540582813-80dcf3c88aa7" },
  { id: 8, name: "Snake Plant", price: 20, category: "Succulent", image: "https://images.unsplash.com/photo-1556912994-35d8d3f6b84f" },
  { id: 9, name: "Echeveria", price: 18, category: "Succulent", image: "https://images.unsplash.com/photo-1561078242-69e0115a8e4d" },
  { id: 10, name: "Jade Plant", price: 25, category: "Succulent", image: "https://images.unsplash.com/photo-1578681541957-882ef4d2f828" },
  { id: 11, name: "Haworthia", price: 17, category: "Succulent", image: "https://images.unsplash.com/photo-1603031979050-9f8b40f39f6b" },
  { id: 12, name: "Lithops", price: 12, category: "Succulent", image: "https://images.unsplash.com/photo-1610971675255-05bc58c7d2d8" },

  // Flowering
  { id: 13, name: "Orchid", price: 35, category: "Flowering", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
  { id: 14, name: "Peace Lily", price: 28, category: "Flowering", image: "https://images.unsplash.com/photo-1587740896335-6345d9f825a7" },
  { id: 15, name: "African Violet", price: 18, category: "Flowering", image: "https://images.unsplash.com/photo-1617196039772-c458a5de0b87" },
  { id: 16, name: "Begonia", price: 20, category: "Flowering", image: "https://images.unsplash.com/photo-1617196039772-c458a5de0b87" },
  { id: 17, name: "Kalanchoe", price: 15, category: "Flowering", image: "https://images.unsplash.com/photo-1617196039772-c458a5de0b87" },
  { id: 18, name: "Anthurium", price: 30, category: "Flowering", image: "https://images.unsplash.com/photo-1617196039772-c458a5de0b87" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id => cartItems.some(item => item.id === id);

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <>
      <Navbar />
      <h2>Our Plants</h2>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === cat).map(plant => (
              <div key={plant.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                <img src={plant.image} alt={plant.name} style={{ width: "100px", height: "100px" }} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
