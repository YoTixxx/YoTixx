import React, { useRef, useState } from "react";
import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import "../SignIn/SignIn.scss";
import { useAuth } from "../../../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.valeu) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
      <YoTixxHeader />
      <div className="text-container">
        <p className="text-content">Sign Up</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <div>
          <p className="text-content">
            Already have a YoTixx Account?
            <p className="text-content sign-in-link"> Sign In</p>
          </p>
        </div>
      </div>

      <div className="forms-container" onSubmit={handleSubmit}>
        <Form
          id="email"
          label="Email Address"
          type="email"
          ref={emailRef}
          required
        />
        <Form
          id="password"
          label="Password"
          type="password"
          ref={passwordRef}
          required
        />
        <Form
          id="confirm password"
          label="Confirm Password"
          type="password"
          ref={confirmPasswordRef}
          required
        />
        <h1>{error}</h1>
        {/* <Form label="First Name"  ref={nameRef} />
        <Form label="Last Name" ref={lastNameRef}/>
        <Form label="City"  ref={cityRef}/>
        <Form label="Postal Code"  ref={postalRef}/> */}

        <div className="sign-in-button">
          <button
            type="submit"
            style={{
              height: "62px",
              width: "140px",
              backgroundColor: "navy",
              color: "white",
            }}
            disabled={loading}
          >
            Sign Up
          </button>
          {/* <SignInButton disabled={loading} name="Sign Up" /> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
