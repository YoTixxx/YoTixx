import React from "react";
import Signup from "./SignPage/SignUp/SignUp";
import SignIn from "./SignPage/SignIn/SignIn";
import Home from "./HomePage/Home"
import ResetPassword from "./PasswordReset/index"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoutes from './PrivateRoutes'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoutes  exact path="/" component={Home}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={SignIn} />
            <Route path="/forgot-password" component={ResetPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
