import { NavLink } from "react-router-dom";

import BuymeacoffeeImg from "../../Assets/bmc-full-logo-no-background.png";

import "./sidebar.styles.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Cryptoinfo</h1>
      <div className="navigation">
        <NavLink exact="true" to="/" className="link" activeclassname="active">
          Dashboard
          <div className="active-mark"></div>
        </NavLink>
        <NavLink
          exact="true"
          to="/watchlist"
          className="link"
          activeclassname="active"
        >
          Watchlist
          <div className="active-mark"></div>
        </NavLink>
        <NavLink
          exact="true"
          to="/signin"
          className="link"
          activeclassname="active"
        >
          Signin
          <div className="active-mark"></div>
        </NavLink>
        <NavLink
          exact="true"
          to="/signup"
          className="link"
          activeclassname="active"
        >
          Signup
          <div className="active-mark"></div>
        </NavLink>
      </div>
      <a
        className="footer-link"
        href="https://www.buymeacoffee.com/sharrysivia"
        target="_blank"
      >
        <img src={BuymeacoffeeImg} alt="Buy Me A Coffee" />
      </a>
    </div>
  );
}

export default Sidebar;
