import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from './../api/auth'

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = ({ setLoggedIn }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  })

  const { email, password, name } = inputs

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await register(email, password, name)

      if (response.jwtToken) {
        localStorage.setItem('token', response.jwtToken)
        setLoggedIn(true)
        toast.success('Registered Successfully')
      } else {
        setLoggedIn(false)
        toast.error('response error: ', response)
      }
    } catch (err) {
      console.error('onSubmit form error: ', err.message)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          autoComplete="given-name"
          name="name"
          required
          fullWidth
          id="name"
          label="Name"
          autoFocus
          onChange={(e) => onChange(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={(e) => onChange(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => onChange(e)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link to='/login' variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  )
}

export default Register
