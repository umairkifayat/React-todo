import React from 'react'
import { TextField,Button } from '@mui/material';
const Home = () => {
  return (
    <>
  <form className='d-flex justify-content-center align-item-center h-80'>
  <TextField id="outlined-basic" label="Add Todo"   variant="outlined" />
  <Button variant="contained" type="submit">  Add List</Button>
  </form>
    </>
  )
}

export default Home
