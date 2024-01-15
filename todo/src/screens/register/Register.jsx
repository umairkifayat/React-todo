import React, { useRef, useState } from 'react'
import { TextField,Button,Box,CircularProgress } from "@mui/material";


const Register = () => {

  // use state 
  const [loading,setloading] = useState(false);

// use ref 
const email = useRef()
const password = useRef()


  // Register function 
  const Register = (event)=>{
event.preventDefault()
console.log('login clicked');
console.log(email.current.value);
console.log(password.current.value);
email.current.value = ''
password.current.value = ''
setloading(!loading)
  }
  return (
    <Box sx={{height:'80vh'}} className = 'd-flex justify-content-center align-item-center'>
      <form onSubmit={Register} className='d-flex justify-content-center flex-column w-25 gap-5' >

    <TextField id="standard-basic" type='email' label="Email" variant="standard" required inputRef={email}/>
    <TextField id="standard-basic" type='password' label="Password" variant="standard" required inputRef={password} />
    <Button variant="contained" type='submit' >{loading ? <CircularProgress sx={{color:'white'}} size={20}/> : 'Register'}</Button>
      </form>
    </Box>
  )
}

export default Register
