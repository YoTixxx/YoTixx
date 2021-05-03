import {useRef} from "react"
import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import "../SignIn/SignIn.scss";

const SignUp = () => {
  const emailRef = useRef
  const passwordRef = useRef
  const nameRef = useRef
  const lastNameRef = useRef
  const cityRef = useRef
  const postalRef = useRef


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
        <Form label="Email Address" type="email" ref={emailRef}/>
        <Form label="Password" type="password" ref={passwordRef} />
        <Form label="First Name" ref={nameRef} />
        <Form label="Last Name" ref={lastNameRef}/>
        <Form label="City"  ref={cityRef}/>
        <Form label="Postal Code"  ref={postalRef}/>
      </div>
      <div className="sign-in-button">
        <SignInButton name="Sign Up" />
      </div>
    </div>
  );
};

export default SignUp;
