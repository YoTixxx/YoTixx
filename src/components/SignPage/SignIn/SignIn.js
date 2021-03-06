import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
// import "./SignUp.scss";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign In");
    }

    setLoading(false);
  }

  return (
    <>
      <YoTixxHeader />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Ip</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
          <div>
            <Link to="/forgot-password"> Forgot Password</Link>
          </div>
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
        </Card.Body>
      </Card>
      <div>
        <div className="text-content">
          New to YoTixx? Creat an Account?
          <Link to="/signup" className="text-content sign-in-link">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="w-100 text-center mt-2"></div>
    </>
  );
}
