import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import NavBar from './NavBar';
import Prog from './Prog'


const useStyles = makeStyles((theme) => ({
 

  Paper: {
    width: 400,
    margin: "0 auto",
    marginTop:25,
    textAlign: "center",
    padding:15
  },
  input: {
    width: "95%",
    marginBottom:10
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Paper elevation={3} className={classes.Paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Email" className={classes.input} />
          <TextField label="Password" className={classes.input} />

          <Button variant="contained" color="primary" className={classes.input}>
            Primary
          </Button>
          <Prog />
        </form>
      </Paper>
    </div>
  );
}

export default App;
