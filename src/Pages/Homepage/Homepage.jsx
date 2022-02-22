import Sidebar from "../../Components/Sidebar/Sidebar.component";
import Dashboard from "../Dashboard/Dashboard";

import "./Homepage.styles.scss";

function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Homepage;
