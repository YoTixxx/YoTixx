import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "70%",
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="filled-required"
          label={props.label}
          type={props.type}
          defaultValue={props.value}
          variant="filled"
        />
      </div>
    </form>
  );
};

export default Form;
