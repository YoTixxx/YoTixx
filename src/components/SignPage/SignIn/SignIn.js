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
          <p className="text-content">
            New to YoTixx?
            <p className="text-content sign-in-link"> Sign Up</p>
          </p>
        </div>
      </div>
      <div className="forms-container">
        <Form label="Email Address" />
        <Form label="Password" type="password" />
      </div>
      <div className="sign-in-button">
        <SignInButton name="Sign In" />
      </div>
    </div>
  );
};

export default SignIn;
