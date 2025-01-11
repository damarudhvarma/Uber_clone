import React, { useContext, useEffect,useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({
    children
}) => {

   const token = localStorage.getItem('token');
    const navigate= useNavigate();
    const [loading, setloading] = useState(true)
    const{user, setUser} = useContext(UserDataContext)

  useEffect(() => { 
    if(!token){
        navigate('/login')
    } 

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
  }).then((res)=>{
    if(res.status===200){
      setUser(res.data)
      setloading(false)
    }
  })
  .catch((err)=>{
    console.log(err)
    localStorage.removeItem('token')
    navigate('/login')
  })
    }, [token, navigate, setUser])  

    

    if(loading){  
        return <div>Loading...</div>
    }

     

  return (
    <div>{children}</div>
  )
}

export default UserProtectedWrapper