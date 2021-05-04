import React from "react";
import Signup from "./SignPage/SignUp/SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
      <Router>
    <AuthProvider>
      <Signup />
    </AuthProvider>
    </Router>
  );
}

export default App;
