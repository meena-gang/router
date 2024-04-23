import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",background:"lightgray", width:"100vw",
    position: "fixed", top: "0",left: "0"}}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/login'>Login</Link>
       
    </div>
  )
}

export default Navbar;