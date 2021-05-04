import React, { useRef, useState } from "react";
import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
// import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import "../SignIn/SignIn.scss";
import { useAuth } from "../../../contexts/AuthContext";
import { Alert, Form, Button, Card } from "react-bootstrap";

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
      // return setError("Passwords do not match");
      console.log("password not a match ")
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


  const Click = () => { 
    console.log("hello ")
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
      <Card>
        <Card.Body>
      <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          </Card.Body>
          </Card>
    </div>
  );
};

export default SignUp;
