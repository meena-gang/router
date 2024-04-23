import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  
  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/?' element={<Products/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App
