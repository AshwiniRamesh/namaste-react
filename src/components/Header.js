import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';

const Header = () => {
  let [btnName, setBtnName]= useState("Login");
          return (
            <div className="header">
              <img
                className="logo-container"
                src={LOGO_URL}
              />
              <div className="nav-items">
                <ul>
                  <li key="home">Home</li>
                  <li key="about">About Us</li>
                  <li key="contact">Contact Us</li>
                  <li key="cart">Cart</li>
                  <button className='login-button' onClick={()=>{
                    return btnName === "Login"? setBtnName("Logout"): setBtnName("Login");
                  } }>{btnName}</button>
                </ul>
              </div>
            </div>
          );
        };
module.exports = {Header};
