import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignPage/index";
import Signup from "./components/SignPage/SignUp/SignUp"
import { AuthProvider} from "./contexts/AuthContext"
// import Concerts from "./components/Concerts/index";
// import Sports from "./components/Sports/index";
// import Theatre from "./components/ArtsTheatrePage/index";

ReactDOM.render(
  <React.StrictMode>
<AuthProvider>
    <Signup/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
