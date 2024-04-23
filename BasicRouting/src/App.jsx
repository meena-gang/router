import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      
    </>
  )
}

export default App
