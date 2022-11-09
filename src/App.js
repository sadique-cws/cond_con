import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
   <>
    <Header />
    <Routes>
      
      <Route path='/' element={<Banner/>}/>
      <Route path="/signup" element={ <Register />}/>
      <Route path="/login" element={ <Login />}/>
    </Routes>
    </>
  )
}

export default App