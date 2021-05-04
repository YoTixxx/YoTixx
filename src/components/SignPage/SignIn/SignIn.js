import { Link } from "react-router-dom";

import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div>
      <YoTixxHeader />
      <div className="text-container">
        <p className="text-content">Sign In</p>
        <div>
          <p className="text-content">New to YoTixx?</p>
          <Link to="/signup" className="text-content sign-in-link">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
      <div className="forms-container">
        <Form
          type="text"
          placeholder="Email Address"
          style={{ width: "60%" }}
        />
        <Form type="password" placeholder="Password" style={{ width: "60%" }} />
        <div className="sign-in-button">
          <SignInButton name="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
