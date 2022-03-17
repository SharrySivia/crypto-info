import { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../Components/Forminput/Forminput.component";
import CustomButton from "../../Components/Custombutton/Custombutton.component";

import "./Signup.styles.scss";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: null,
    email: null,
    password: null,
  });
  const { email, username, password } = userInfo;

  const handleChange = (input) => {
    setUserInfo({ ...userInfo, [input.name]: input.value });
  };

  const handleClick = () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const isEmailValid = regex.test(userInfo.email);
    if (isEmailValid) {
      console.log(userInfo);
    } else {
      console.log("Invalid email");
    }
  };

  return (
    <div className="signup">
      <h3 className="heading">Signup</h3>
      <div className="inputs-container">
        <FormInput
          placeholder="Username"
          name="username"
          value={username}
          type="text"
          isRequired={true}
          handleChange={handleChange}
        />
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
          text="Signup"
          varient="primary"
          isDisabled={!email || !username || !password}
          handleClick={handleClick}
        />
        <p>
          Already have a account? <Link to="/signin">Signin</Link> here.
        </p>
      </div>
    </div>
  );
}

export default Signup;
