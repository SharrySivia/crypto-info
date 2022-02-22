import { NavLink, BrowserRouter as Router } from "react-router-dom";

import BuymeacoffeeImg from "../../Assets/bmc-full-logo-no-background.png";

import "./sidebar.styles.scss";

function Sidebar() {
  return (
    <Router>
      <div className="sidebar">
        <h1 className="logo">Cryptoinfo</h1>
        <div className="navigation">
          <NavLink exact to="/" className="link" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink
            exact
            to="/watchlist"
            className="link"
            activeClassName="active"
          >
            Watchlist
          </NavLink>
          <NavLink exact to="/signin" className="link" activeClassName="active">
            Signin
          </NavLink>
          <NavLink exact to="/signup" className="link" activeClassName="active">
            Signup
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
    </Router>
  );
}

export default Sidebar;
