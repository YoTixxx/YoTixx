import React from "react";
import Signup from "./SignPage/SignUp/SignUp";
import SignIn from "./SignPage/SignIn/SignIn";
import Home from "./HomePage/Home";
import Navbar from "./ReusableComponents/Navbar/index";
import ResetPassword from "./PasswordReset/index";
import UpdateProfile from "./UpdateProfile/Index";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoutes exact path="/" component={Home} />
            <PrivateRoutes path="/update-profile" component={UpdateProfile} />
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
