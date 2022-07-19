import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

import BuymeacoffeeImg from "../../Assets/bmc-full-logo-no-background.png";

import "./sidebar.styles.scss";

function Sidebar() {
  const [{ user }, dispatch] = useContext(UserContext);

  const handleClick = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("watchlist");
    dispatch({
      type: "LOGOUT",
    });
  };
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
        {user ? (
          <span className="userinfo" onClick={handleClick}>
            {user.username}
          </span>
        ) : (
          <>
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
          </>
        )}
      </div>
      <a
        className="footer-link"
        href="https://www.buymeacoffee.com/sharrysivia"
      >
        <img src={BuymeacoffeeImg} alt="Buy Me A Coffee" />
      </a>
    </div>
  );
}

export default Sidebar;
