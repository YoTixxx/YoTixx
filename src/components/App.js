import React from "react";
import Signup from "./SignPage/SignUp/SignUp";
import SignIn from "./SignPage/SignIn/SignIn";
import Home from "./HomePage/Home"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={SignIn} />

          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
