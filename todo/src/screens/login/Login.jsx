import React, { useRef, useState } from 'react'
import { TextField,Button,Box,CircularProgress } from "@mui/material";


const Login = () => {

  // use state 
  const [loading,setloading] = useState(false);

// use ref 
const email = useRef()
const password = useRef()


  // login function 
  const login = (event)=>{
event.preventDefault()
console.log('login clicked');
console.log(email.current.value);
console.log(password.current.value);

  }
  return (
    <Box sx={{height:'80vh'}} className = 'd-flex justify-content-center align-item-center'>
      <form onSubmit={login} className='d-flex justify-content-center flex-column w-25 gap-5' >

    <TextField id="standard-basic" type='email' label="Email" variant="standard" required inputRef={email}/>
    <TextField id="standard-basic" type='password' label="Password" variant="standard" required inputRef={password} />
    <Button variant="contained" type='submit' >{loading ? <CircularProgress sx={{color:'white'}} size={20}/> : 'Login'}</Button>
      </form>
    </Box>
  )
}

export default Login
