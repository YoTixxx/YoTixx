import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  test: {
    backgroundColor: "blue",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <h1>YoTixx</h1>
      <h1>Testing the automatic deploy</h1>
    </div>
  );
}

export default Home;
