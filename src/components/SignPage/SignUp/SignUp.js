import React, {useRef, useState} from "react"
import YoTixxHeader from "../../ReusableComponents/YoTixxHeader/YoHeader";
import Form from "../../ReusableComponents/Forms/Form";
import SignInButton from "../../ReusableComponents/SignButton/SignButton";
import {useAuth} from "../../contexts/AuthContext"
import "../SignIn/SignIn.scss";

const SignUp = () => {
  const emailRef = useRef
  const passwordRef = useRef
  const confirmPasswordRef = useRef
  const nameRef = useRef
  const lastNameRef = useRef
  const cityRef = useRef
  const postalRef = useRef
const {signup} = useAuth
const [error, setError] = useState("")
const [loading, setLoading]= useState(false)

async function handleSubmit (e){ 
  e.preventDefault()

if (passwordRef.current.value !== confirmPasswordRef.current.value){
  return setError("Password do not match")
}

try{
  setError("")
  setLoading(true)
  await signup(emailRef.current.value, passwordRef.current.value)
}catch{
  setError("Failed to create an account ")
}
setLoading(false)
}

  return (
    <div>
      <YoTixxHeader />
      <div className="text-container">
        <p className="text-content">Sign Up</p>
        {error && <h2>{error}</h2>}
        <div>
          <p className="text-content">
            Already have a YoTixx Account?
            <p className="text-content sign-in-link"> Sign In</p>
          </p>
        </div>
      </div>
      <div className="forms-container" onSubmit={handleSubmit}>
        <Form label="Email Address" type="email" ref={emailRef}/>
        <Form label="Password" type="password" ref={passwordRef} />
        <Form label="Confirm Password" type="confirmPassword" ref={confirmPasswordRef} />
        <Form label="First Name"  ref={nameRef} />
        <Form label="Last Name" ref={lastNameRef}/>
        <Form label="City"  ref={cityRef}/>
        <Form label="Postal Code"  ref={postalRef}/>
      </div>
      <div className="sign-in-button">
        <SignInButton disabled={loading} name="Sign Up" />
      </div>
    </div>
  );
};

export default SignUp;
