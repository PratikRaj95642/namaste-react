import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [BtnNameReact, setBtnNameReact] = useState("login");
  const Onlinestatus = useOnlineStatus();
  const LogedInUser = useContext(UserContext);
  console.log(LogedInUser);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Online Status : {Onlinestatus ? "🟩" : "🟥"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
