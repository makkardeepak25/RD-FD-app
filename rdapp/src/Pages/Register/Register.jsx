import { Box, Container, TextField,Button } from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    container: {
        textAlign:"center",
        width:"70%",
        margin: "auto",
        backgroundColor:"#81ecec",
        marginTop: "20%",
        padding: "20px"

    },

    boxes: {
        width:"70%",
        margin: "auto",
        backgroundColor:"#57a6db",
        padding: "10px",
        margin: "5px"

    }
})
export function Register() {
    const classes =useStyles() 
  return (
    <>
      <Container className={classes.container}>
        <Box className={classes.boxes}>
          <TextField label="First Name" variant="outlined">
            First Name
          </TextField>
          </Box>
          <Box className={classes.boxes}>
          <TextField label="Last Name" variant="outlined">
            Last Name
          </TextField>
        </Box>
        <Box maxWidth className={classes.boxes}>
           
          <TextField  variant="outlined" type="date" >
           
          </TextField>
        </Box >

        <Box className={classes.boxes}>
          <TextField label="Email" variant="outlined">
            Email
          </TextField>
        </Box>

        <Box className={classes.boxes}>
          <TextField label="Password" variant="outlined">
            Password
          </TextField>
        </Box>
        <Box>
        <Button variant="contained" color="secondary">
  Submit
</Button>
        </Box>
      </Container>
    </>
  );
}
