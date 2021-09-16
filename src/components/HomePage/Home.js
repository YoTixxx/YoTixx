import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import HomeHeader from "../ReusableComponents/HomeHeader/Index";
import ImageSlider from "./slideshow/ImageSlider";
import SideBar from "../ReusableComponents/SidebarEvents/index";
import Popular from "../ReusableComponents/PopularEvents/index";

import Concerts from "../../api/Concerts";
import Sports from "../../api/Sports";
import Arts from "../../api/Arts";

const useStyles = makeStyles((theme) => ({
  test: {
    backgroundColor: "blue",
  },
}));

function Home() {
  const classes = useStyles();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <HomeHeader />
      <ImageSlider />
      {/* <SideBar
        src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
        title="Jonas Brothers"
        description="See the global superstar trio on the Remember This Tour!"
      /> */}
      <Popular
        src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
        title="Toronto Blue Jays"
        date="Sep 21 2021"
        location="Rogers Arena"
      />
      <Concerts />
      <Sports />
      <Arts />
      {/* <div className={classes.test}>
        <h1>YoTixx</h1>
        <h1>Testing the automatic deploy again</h1>
        <h2>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong>
        {currentUser.email}
        <Button onClick={() => history.push("/update-profile")}>
          Update Profile
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
      </div> */}
    </>
  );
}

export default Home;
