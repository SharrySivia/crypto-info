import { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../Components/Forminput/Forminput.component";
import CustomButton from "../../Components/Custombutton/Custombutton.component";
import { login } from "../../Api/user";

import "./Signin.styles.scss";

function Signin() {
  const [userInfo, setUserInfo] = useState({ email: null, password: null });
  const { email, password } = userInfo;

  const handleChange = (input) => {
    setUserInfo({ ...userInfo, [input.name]: input.value });
  };

  const handleClick = async () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const isEmailValid = regex.test(userInfo.email);
    if (isEmailValid) {
      const { user, err } = await login(userInfo);
      console.log(user, err);
    } else {
      console.log("Invalid email");
    }
  };

  return (
    <div className="signin">
      <h3 className="heading">Signin</h3>
      <div className="inputs-container">
        <FormInput
          placeholder="Email"
          name="email"
          value={email}
          type="email"
          isRequired={true}
          handleChange={handleChange}
        />
        <FormInput
          placeholder="Password"
          name="password"
          value={password}
          type="password"
          isRequired={true}
          handleChange={handleChange}
        />
        <CustomButton
          text="Signin"
          varient="primary"
          handleClick={handleClick}
          isDisabled={!email || !password}
        />
        <p>
          Don't have a account? <Link to="/signup">Signup</Link> here.
        </p>
      </div>
    </div>
  );
}

export default Signin;
