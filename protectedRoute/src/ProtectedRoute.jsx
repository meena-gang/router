import React from 'react'
import { useContext } from 'react';
import { authContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {
    const {token} = useContext(authContext);
    console.log(token,' fromProtectedRoute');
  return (
    <div>
       {token ? children : <Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute