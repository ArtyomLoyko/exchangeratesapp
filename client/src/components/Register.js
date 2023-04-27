import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from './../api/auth'

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
    <>
      <h1 className='mt-5 text-center'>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={(e) => onChange(e)}
          className='form-control my-3'
        />
        <input
          type='password'
          name='password'
          value={password}
          placeholder='password'
          onChange={(e) => onChange(e)}
          className='form-control my-3'
        />
        <input
          type='text'
          name='name'
          value={name}
          placeholder='name'
          onChange={(e) => onChange(e)}
          className='form-control my-3'
        />
        <button className='btn btn-success btn-block'>Submit</button>
      </form>
      <Link to='/login'>login</Link>
    </>
  )
}

export default Register
