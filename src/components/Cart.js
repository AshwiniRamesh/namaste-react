import UserContext from '../utils/userContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { DISH_URL, ALT_IMG_FOOD } from "../utils/constants";

const Cart = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser, "loggedinuser");

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Subscribing to the selector using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {cartItems.length === 0 && <h1>Cart is empty</h1>}
      {cartItems.map((item) => (
        <div key={item.id} className="border p-2 m-2">
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="font-bold">Price: ₹{(item.finalPrice / 100).toFixed(2)}</p>
          {item.imageId && (
            <img
            src={item.imageId ? `${DISH_URL}${item.imageId}` : ALT_IMG_FOOD}
              alt={item.name}
              className="w-32 h-32 object-cover"
            />
          )}
          {item.isBestseller && (
            <span className="bg-red-500 text-white p-1 text-xs">Bestseller</span>
          )}
        </div>
      ))}
      <button
        onClick={handleClearCart}
        className="bg-red-500 text-white px-4 py-2 mt-4"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
