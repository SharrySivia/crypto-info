import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar.component";
import Dashboard from "../Dashboard/Dashboard";
import Watchlist from "../Watchlist/Watchlist";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

import "./Homepage.styles.scss";

function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default Homepage;
