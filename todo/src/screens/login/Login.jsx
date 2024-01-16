import React, { useRef, useState } from 'react'
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/firebaseconfig';
import OutlinedAlerts from '../../components/alert';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // use state 
  const [loading, setloading] = useState(false);
  const [registrationSuccess, setRegistration] = useState(false);
  let navigate = useNavigate()
  
  // use ref 
  const email = useRef()
  const password = useRef()
  
  
  // login function 
  const login = (event) => {
    event.preventDefault()
    setloading(true);
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setRegistration(true)
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }) 
    .finally(() => {
      // Stop loading
      setloading(false);
    });
  

  }
  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={login} className='d-flex justify-content-center flex-column w-25 gap-5' >
       {registrationSuccess && <OutlinedAlerts message="Registration successful!" />}

        <TextField id="standard-basic" type='email' label="Email" variant="standard" required inputRef={email} />
        <TextField id="standard-basic" type='password' label="Password" variant="standard" required inputRef={password} />
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Login'}
        </Button>
      </form>
    </Box>
  )
}

export default Login
