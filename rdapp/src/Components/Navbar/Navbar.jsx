import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export  function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         <Link to={"/fdportfolio"} style={{textDecoration:"none", color:"white"}}>
          <Typography variant="h6" className={classes.title}>
            FD PORTFOLIO
          </Typography>
          </Link>
          <Link to={"/rdportfolio"} style={{textDecoration:"none", color:"white"}}>
          <Typography variant="h6" className={classes.title}>
          RD PORTFOLIO
          </Typography>
          </Link>
          <Link to={"/login"} style={{textDecoration:"none", color:"white"}}>
          <Button color="inherit">LOGIN</Button></Link>
         <Link to={"/register"} style={{textDecoration:"none", color:"white"}}> <Button color="inherit">REGISTER</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}