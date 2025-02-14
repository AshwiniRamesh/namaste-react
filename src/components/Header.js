import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus, "onlinestatus")
  return (
    <div className="header">
      <img
        className="logo-container"
        src={LOGO_URL}
      />
      <div className="nav-items">
        <ul>
          <li className="online-status">
            <span className={`status-dot ${onlineStatus ? "online" : "offline"}`}></span>
            {onlineStatus ? "Online" : "Offline"}
          </li>

          <li key="home"><Link to="/home">Home</Link></li>
          <li key="about"><Link to="/about">About Us</Link></li>
          <li key="contact"><Link to="/contact">Contact Us</Link></li>
          <li key="cart"><Link to="/cart">Cart</Link></li>
          <li key="grocery"><Link to="/grocery">Grocery</Link></li>
          <button className='login-button' onClick={() => {
            return btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
module.exports = { Header };
