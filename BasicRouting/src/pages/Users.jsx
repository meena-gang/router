import React, { useEffect, useState } from 'react'

const Users = () => {
    const[users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://reqres.in/api/users`)
        .then(res => res.json())
        .then(data => setUsers(data.data))
        },[])
    
  return (
     <>
       {users.map((user) => <div key={user.id} style={{display:"flex", justifyContent:"space-between", width:"100px"}}>
        <p>{user.id}</p>
        <p>{user.first_name}</p>
        </div>)}
     </>
    
  )
}

export default Users