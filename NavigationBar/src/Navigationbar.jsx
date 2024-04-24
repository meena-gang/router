import React from 'react'
import { Navigate,useNavigate} from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();


  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",background:"lightgray", width:"100vw",
    position: "fixed", top: "0",left: "0", cursor:"pointer"}}>
        <p onClick={() => navigate('./')}>Home</p>
        <p onClick={() => navigate('/about')}>About</p>
        <p onClick={() => navigate('/products')}>Produts</p>
        <p onClick={() => navigate('/contact')}>Contact</p>
    </div>
  )
}

export default Navbar;