import { Link } from "react-router-dom";
import "./Signup.styles.scss";

function Signup() {
  return (
    <div className="signup">
      <h3 className="heading">Signup</h3>
      <p>
        Already have a account? <Link to="/signin">Signin</Link> here.
      </p>
    </div>
  );
}

export default Signup;
