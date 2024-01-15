import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseconfig'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Protectedroutes = ({ components }) => {

    // navgate
    const navigate = useNavigate()
    // use state 
    const [user, setuser] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                console.log('user ha');
                navigate('/login')
                return
            }
            
            setuser(true)
            console.log('mar gya ha');
        })
    }, [])
    return (
        user ? components : <Typography variant='h1' color='initial'>loading...</Typography>

    )
}

export default Protectedroutes
