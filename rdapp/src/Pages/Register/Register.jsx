import { Box, Container, TextField,Button } from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const init={
  first_name:"",
  last_name:"",
  dob:"",
  email:"",
  password:""

}

const useStyles = makeStyles({
    container: {
        textAlign:"center",
        width:"70%",
        margin: "auto",
        backgroundColor:"#81ecec",
        marginTop: "20%",
        padding: "20px",
       

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
  const[state,setState]= React.useState(init)
  const[data,setData]=React.useState([])
  const {first_name,last_name,dob,password,email}= state
    const classes =useStyles() 


    const handleChange=(e)=>{
      const {name,value} =e.target
      setState({...state,[name]:value})
      console.log(name,value)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(first_name)
      const payload={
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        dob:dob
      }
      setData([...data,payload])
      console.log(data)

    }
  return (
    <>
      <Container className={classes.container}>
        <form onSubmit={handleSubmit}>
        <Box className={classes.boxes}>
          <TextField label="First Name" type="text" variant="outlined" onChange={handleChange} name="first_name">
            First Name
          </TextField>
          </Box>
          <Box className={classes.boxes}>
          <TextField label="Last Name" type="text" variant="outlined" onChange={handleChange} name="last_name">
            Last Name
          </TextField>
        </Box>
        <Box maxWidth className={classes.boxes}>
           
          <TextField  variant="outlined"  type="date" onChange={handleChange} name="dob" >
           
          </TextField>
        </Box >

        <Box className={classes.boxes}>
          <TextField label="Email" type="email" variant="outlined" onChange={handleChange} name="email">
            Email
          </TextField>
        </Box>

        <Box className={classes.boxes}>
          <TextField label="Password" type="password" variant="outlined" onChange={handleChange} name="password">
            Password
          </TextField>
        </Box>
        <Box>
        <Button variant="contained" color="secondary"  type="submit">
  Submit
</Button>
        </Box>
        </form>
      </Container>
      
    </>
  );
}
