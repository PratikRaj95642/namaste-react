import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [BtnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              BtnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
              console.log(BtnNameReact);
            }}
          >
            {BtnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
