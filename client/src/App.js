import React, { useState, useEffect, useCallback } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { verify } from './api/auth'

import Login from './components/Login'
import Register from './components/Register'
import Converter from './components/converter'
import Header from './components/Header'

toast.configure()

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const checkAuth = useCallback(async () => {
    try {
      const response = await verify()

      response === true ? setLoggedIn(true) : setLoggedIn(false)
    } catch (err) {
      console.error('checkAuth error: ', err.message)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <BrowserRouter>
      <Header />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Routes>
          <Route
            exact
            path='/'
            Component={(props) =>
              !loggedIn ? (
                <Navigate to='/login' />
              ) : (
                <Converter {...props} setLoggedIn={setLoggedIn} />
              )
            }
          />
          <Route
            path='/login'
            Component={(props) =>
              !loggedIn ? (
                <Login {...props} setLoggedIn={setLoggedIn} />
              ) : (
                <Navigate to='/' />
              )
            }
          />
          <Route
            path='/register'
            Component={(props) =>
              !loggedIn ? (
                <Register {...props} setLoggedIn={setLoggedIn} />
              ) : (
                <Navigate to='/' />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
