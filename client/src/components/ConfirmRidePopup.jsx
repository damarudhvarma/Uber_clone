import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const ConfirmRidePopup = ({setConfirmRidePopup,setridePopupPanel}) => {

 const [otp, setOtp] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();


    }

  return (



    <div className=''>
    {" "}
    <h5
        onClick={() => {
            
        }}
      className="absolute  p-1 top-0 w-[93%] text-center  text-gray-300"
    >
      <i className=" text-3xl ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-4">Confirm this ride to Start</h3>
    <div className='flex items-center justify-between p-3 bg-black rounded-lg mt-4'>
        <div className='flex items-center gap-3  '>
        <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/q30mtGI6Uq8L1sU9H02hXDiETyRoSxEtuLtXNNmTvSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24teW91bmct/dXNlci1pY29uLTI0/MDAucG5n" alt="user" />
        <h2 className='text-lg font-medium text-white'>User's name</h2>
        </div>
        <h5 className='text-lg font-semibold text-white'>2.2 KM</h5>
    </div>
    <div className="w-full mt-5  gap-5">
      <div className="flex gap-5 items-center border-b-2 p-3">
        <i className=" text-lg ri-map-pin-user-fill"></i>
        <div>
          <h4 className="text-lg font-medium">562/11-A</h4>
          <p className="text-sm -mt-1 text-gray-600">HYD, Telangana </p>
        </div>
      </div>
      <div className="flex gap-5 items-center border-b-2 p-3" >
        <i className=" text-lg ri-map-pin-2-fill"></i>
        <div>
          <h4 className="text-lg font-medium">562/11-A</h4>
          <p className="text-sm -mt-1 text-gray-600">HYD, Telangana </p>
        </div>
      </div>
      <div className="flex gap-5 items-center  p-3">
        {" "}
        <i className="ri-currency-line"></i>
        <div>
          <h4 className="text-lg font-medium">₹192.20</h4>
          <p className="text-sm -mt-1 text-gray-600">cash cash </p>
        </div>
      </div>
    </div>
    <form action=""></form>
   <div className='mt-6'>
    <form 
    onSubmit={(e)=>{
        handleSubmit(e);
    }} >
       <input type="text"
       placeholder='Enter OTP'
       className="bg-[#eee] px-12 py-4 font-mono text-base rounded-lg w-full  mb-3"
         value={otp}
            onChange={(e) => setOtp(e.target
            .value)}
        />

         <Link  to ='/captain-riding'
    className="w-ful flex justify-center mt-5 bg-black font-semibold p-4 rounded-lg  text-white text-lg">
      Confirm
    </Link>
    <button
    onClick={()=>{
        setConfirmRidePopup(false);
        setridePopupPanel(false);
    }
    }

    className="w-full mt-3 bg-red-600 font-semibold p-3 rounded-lg  text-white text-lg">
      Cancel
    </button>
    </form>
    </div>
   
  </div>
  )
}

export default ConfirmRidePopup