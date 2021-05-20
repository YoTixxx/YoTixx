import React, { useRef, useState } from "react";
import { Link} from "react-router-dom";
import YoTixxHeader from "../ReusableComponents/YoTixxHeader/YoHeader";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

export default function ResetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage ]= useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        setMessage('')
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email for further instruction ")
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <YoTixxHeader />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="succcess">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
             Reset Password 
            </Button>
          </Form>
          <div>
            <Link to="/login">Login</Link>
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
