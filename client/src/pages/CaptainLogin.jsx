import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const CaptainLogin = () => {

  const navigate= useNavigate();  

 const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const {captain, setCaptain} = useContext(CaptainDataContext);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   const capatain= {
     email,
     password
    }

    const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, capatain);
    
    if(res.status===200){
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem('captain-token', data.token);
      navigate('/captain-home');
    }
     
     setemail('');
    setpassword('');
       
  } 




  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber" />

<form onSubmit={(e)=>{handleSubmit(e)}}  >
  <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>

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
  <p className='text-center'>Join a fleet? <Link to='/captain-signup'
   className='text-blue-600'> Register as a captain</Link></p>
      </div>
      <div>
        <Link
        to='/login' className='bg-[#d5622d] flex items-center justify-center  text-white font-semibold  mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin