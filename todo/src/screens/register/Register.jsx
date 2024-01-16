import React, { useRef, useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase/firebaseconfig';
import OutlinedAlerts from '../../components/alert';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistration] = useState(false);
let navigate = useNavigate();



  const email = useRef();
  const password = useRef();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      // Start loading
      setLoading(true);

      // Register user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      // Signed up
      const user = userCredential.user;
      console.log(user);
      setRegistration(true)
      navigate('/')


    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      // Handle error if needed
    } finally {
      // Stop loading

      setLoading(false);
    }
  };

  return (
    <Box sx={{ height: '80vh' }} className="d-flex justify-content-center align-item-center">
      <form onSubmit={handleRegister} className="d-flex justify-content-center flex-column w-25 gap-5">
        {registrationSuccess && <OutlinedAlerts message="Registration successful!" />}
        <TextField id="standard-basic" type="text" label="Fullname" variant="standard" required />
        <TextField id="standard-basic" type="email" label="Email" variant="standard" required inputRef={email} />
        <TextField id="standard-basic" type="password" label="Password" variant="standard" required inputRef={password} />
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Register'}
        </Button>

      </form>
    </Box>
  );
};

export default Register;
