import UserContext from '../utils/userContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser,"loggedinuser");

  const dispatch = useDispatch();
  const handleClearCart = ()=>{
dispatch(clearCart());}

    //Subscribing to the selector using a Selector
    const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div>
      <h1 class="text-3xl font-bold underline">Cart</h1>
      {cartItems.length ===0 && <h1> Cart is empty </h1>}
      {cartItems.map((item)=> <h6 key={item}>{item}</h6>)}
      <button onClick= {handleClearCart}>Clear</button>
    </div>
  );
};

export default Cart;
