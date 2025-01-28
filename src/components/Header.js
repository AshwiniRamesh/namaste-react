import {LOGO_URL} from '../utils/constants';

const Header = () => {
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
                </ul>
              </div>
            </div>
          );
        };
module.exports = {Header};
