import UserContext from '../utils/userContext';
import { useContext } from 'react';
const Cart = () => {
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser,"loggedinuser")
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Cart</h1>
    </div>
  );
};

export default Cart;
