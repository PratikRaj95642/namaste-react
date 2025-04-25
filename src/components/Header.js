const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={"https://th.bing.com/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?w=196&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"}
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;