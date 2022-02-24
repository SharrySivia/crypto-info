import FormInput from "../../Components/Forminput/Forminput.component";
import "./Dashboard.styles.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header">
        <h3 className="heading">Dashboard</h3>
        <FormInput type="text" placeholder="Search" />
      </div>
      <div className="headings">
        <span>Cryptocurrency</span>
        <span>Open</span>
        <span>Current</span>
        <span>Action</span>
      </div>
    </div>
  );
}

export default Dashboard;
