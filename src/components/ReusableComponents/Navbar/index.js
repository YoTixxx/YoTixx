import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./navbar.scss";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#527ca4",
  },
  font: {
    color: "white",
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#000000",
          },
        }}
        centered
      >
        <Tab className={classes.font} label="CONCERTS" />
        <Tab className={classes.font} label="SPORTS" />
        <Tab className={classes.font} label="ARTS & THEATER" />
      </Tabs>
    </Paper>
  );
}
