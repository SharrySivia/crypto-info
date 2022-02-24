import { Link } from "react-router-dom";
import "./Signin.styles.scss";

function Signin() {
  return (
    <div className="signin">
      <h3 className="heading">Signin</h3>
      <p>
        Don't have a account? <Link to="/signup">Signup</Link> here.
      </p>
    </div>
  );
}

export default Signin;
