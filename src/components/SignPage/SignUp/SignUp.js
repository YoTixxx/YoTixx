import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import "../SignIn/SignIn.scss";

const SignUp = () => {
  return (
    <div>
      <YoTixxHeader />
      <div className="text-container">
        <p className="text-content">Sign Up</p>
        <div>
          <p className="text-content">
            Already have a YoTixx Account?
            <p className="text-content sign-in-link"> Sign In</p>
          </p>
        </div>
      </div>
      <div className="forms-container">
        <Form label="Email Address" />
        <Form label="Password" type="password" />
        <Form label="First Name" />
        <Form label="Last Name" />
        <Form label="City" />
        <Form label="Postal Code" />
      </div>
      <div className="sign-in-button">
        <SignInButton name="Sign Up" />
      </div>
    </div>
  );
};

export default SignUp;
