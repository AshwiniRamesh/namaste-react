import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const contextData = useContext(UserContext);

  // console.log(contextData, "contextData");
  
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <img className="h-12 w-auto" src={LOGO_URL} alt="Logo" />
      <div className="flex items-center">
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="flex items-center space-x-2">
            <span className={`h-3 w-3 rounded-full ${onlineStatus ? "bg-green-500" : "bg-red-500"}`}></span>
            <span>{onlineStatus ? "Online" : "Offline"}</span>
          </li>
          <li><Link to="/home" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          <li><Link to="/cart" className="hover:text-blue-500">Cart</Link></li>
          <li><Link to="/grocery" className="hover:text-blue-500">Grocery</Link></li>
          <li>{contextData.loggedInUser}</li>
          <button 
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

module.exports = { Header };
