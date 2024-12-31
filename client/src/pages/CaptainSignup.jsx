import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [captainData, setcaptainData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    setcaptainData({
      fullname: {
        firstname:firstName,
        lastname:lastName
      },
      email, password
    })
    

    setemail('');
    setpassword('');
    setfirstName('');
    setlastName('');
  }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber" />

        <form onSubmit={(e) => { handleSubmit(e) }}  >
          <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
          <div className='flex gap-3'>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type='text' placeholder='First Name'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required />
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type='text' placeholder='Last Name'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>

          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='Enter your Password'

            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required />
          <button className='bg-[#111]  text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' >Sign up</button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login'
          className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-gray-500 text-[2.7vw] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline text-black font-semibold'>Google
        Privacy Policy </span>and  <span className='underline text-black font-semibold'>Terms of Service apply.</span>

        </p>
      </div>
    </div>
  )
}

export default CaptainSignup