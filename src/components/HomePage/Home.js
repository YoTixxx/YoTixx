import { makeStyles } from "@material-ui/core/styles";
import  {useState} from "react"
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom"
import { Form, Button, Card, Alert } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  test: {
    backgroundColor: "blue",
  },
}));

function Home() {
  const classes = useStyles();
  const [error, setError] = useState("")
  const {currentUser, logout} = useAuth()
  const history= useHistory()

  async function handleLogout(){
    setError('')

    try{
      await logout()
      history.push("/login")
    } catch{
      setError('Failed to log out')
    }
  }

  return (
    <div className={classes.test}>
      <h1>YoTixx</h1>
      <h1>Testing the automatic deploy again</h1>
      <h2>Profile</h2>
{error && <Alert variant="danger">{error}</Alert>}
<strong>Email:</strong>{currentUser.email}
<Button onClick={()=>history.push("/update-profile")}>Update Profile</Button>
<Button onClick={handleLogout}>Logout</Button>

    </div>
  );
}

export default Home;
