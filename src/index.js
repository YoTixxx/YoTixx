import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignPage/index";
import {AuthProvider} from "./components/contexts/AuthContext"
// import Concerts from "./components/Concerts/index";
// import Sports from "./components/Sports/index";
// import Theatre from "./components/ArtsTheatrePage/index";

ReactDOM.render(
  <React.StrictMode>
<AuthProvider>
    <SignIn />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
