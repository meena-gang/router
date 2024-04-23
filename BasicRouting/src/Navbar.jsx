import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",background:"lightgray", width:"100vw",
    position: "fixed", top: "0",left: "0"}}>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/users'>Users</Link>
    </div>
  )
}

export default Navbar;