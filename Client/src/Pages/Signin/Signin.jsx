import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../Components/Forminput/Forminput.component";
import CustomButton from "../../Components/Custombutton/Custombutton.component";
import ErrorModal from "../../Components/Errormodal/Errormodal.component";
import { UserContext } from "../../Context/userContext";
import { login } from "../../Api/user";

import "./Signin.styles.scss";

function Signin() {
  const [userInfo, setUserInfo] = useState({ email: null, password: null });
  const [loading, setLoading] = useState(false);
  const { email, password } = userInfo;
  const [error, setError] = useState({ type: null, message: null });
  const [, dispatch] = useContext(UserContext);

  const handleChange = (input) => {
    if (error.message) {
      setError({ type: null, message: null });
    }
    setUserInfo({ ...userInfo, [input.name]: input.value });
  };

  const handleClick = async () => {
    setLoading(!loading);
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const isEmailValid = regex.test(userInfo.email);
    if (isEmailValid) {
      const { user, watchlist, err } = await login(userInfo);
      if (!err) {
        localStorage.setItem("User", JSON.stringify(user));
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        dispatch({
          type: "ADD_USER",
          payload: { user, watchlist },
        });
      } else {
        setError({ ...error, message: err });
      }
    } else {
      setError({ type: "email", message: "Invalid email address!" });
    }
    setLoading(false);
  };

  return (
    <div className="signin">
      <h3 className="heading">Signin</h3>
      <div className="inputs-container">
        {error.message && <ErrorModal varient="error" text={error.message} />}
        <FormInput
          placeholder="Email"
          name="email"
          value={email}
          type="email"
          isRequired={true}
          handleChange={handleChange}
          err={error}
        />
        <FormInput
          placeholder="Password"
          name="password"
          value={password}
          type="password"
          isRequired={true}
          handleChange={handleChange}
          err={error}
        />
        <CustomButton
          text="Signin"
          isLoading={loading}
          varient="primary"
          handleClick={handleClick}
          isDisabled={!email || !password || error.message || loading}
        />
        <p>
          Don't have a account? <Link to="/signup">Signup</Link> here.
        </p>
      </div>
    </div>
  );
}

export default Signin;
