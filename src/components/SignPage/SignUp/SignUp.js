import { Link } from "react-router-dom";

import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import "../SignIn/SignIn.scss";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div>
      <YoTixxHeader />
      <div className="text-container">
        <p className="text-content">Sign Up</p>
        <div>
          <p className="text-content">Already have a YoTixx Account?</p>
          <Link to="/" className="text-content sign-in-link">
            {" "}
            Sign In
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
        <div className="sign-form-container">
          <div className="left-form">
            <Form type="text" placeholder="First Name" />
            <Form type="text" placeholder="City" />
          </div>
          <div className="right-form">
            <Form type="text" placeholder="Last Name" />
            <Form type="text" placeholder="Postal Code" />
          </div>
        </div>

        <div className="sign-in-button">
          <SignInButton name="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
