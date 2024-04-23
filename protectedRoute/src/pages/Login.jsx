import React, { useContext, useRef, useState } from 'react'
import { authContext } from '../context/AuthContext';

const Login = () => {
    const {token, setToken} = useContext(authContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            email : emailRef.current.value,
            password : passwordRef.current.value

        }
        fetch('https://reqres.in/api/login', { method: "post", 
                                              headers: {"Content-Type": "application/json"},
                                              body : JSON.stringify(formData)
                                            }).then(res => res.json())
                                            .then(data => setToken(data))
                                            .catch((err) => console.log(err))
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input name="email" placeholder='Enter email' ref={emailRef}/>
            <input name="password" placeholder='Enter password' ref={passwordRef}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login