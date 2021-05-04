import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "../SignPage/SignIn/SignIn";
import SignUp from "../SignPage/SignUp/SignUp";

export default function SignPage() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}
