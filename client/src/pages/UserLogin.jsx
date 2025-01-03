import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})

  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
     const userData={
      email, password
     }
     const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      if(response.status===200){
        const data = response.data;
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    
    setemail('');
    setpassword('');
       
  } 




  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber" />

<form onSubmit={(e)=>{handleSubmit(e)}}  >
  <h3 className='text-lg font-medium mb-2'>What's your email</h3>

  <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
  type='email'
   placeholder='Enter your Email' 
   value={email}
   onChange={(e) => setemail(e.target.value)}
   required />

  <h3 className='text-lg font-medium mb-2'>Enter password</h3>
  <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'  type='password' placeholder='Enter your Password'
  value={password}
  onChange={(e) => setpassword(e.target.value)}
   required />
  <button className='bg-[#111]  text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >Login</button>
  
</form>
  <p className='text-center'>New here? <Link to='/user-signup'
   className='text-blue-600'> Create new Account</Link></p>
      </div>
      <div>
        <Link
        to='/captain-login' className='bg-[#10b461] flex items-center justify-center  text-white font-semibold  mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin