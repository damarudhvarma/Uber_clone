import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='h-10 fixed w-10 bg-white flex items-center justify-center shadow-lg rounded-full top-5 right-5 z-50'>
        <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
        <div className='h-1/2'>
        <img
          
          className="object-cover h-full w-full"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="map"
        />
        </div>
        <div className='h-1/2 p-4'>
        <div>
        <div className='flex items-center justify-between'>
        <img
          className="h-16 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
          alt="car"
        />
        <div className='text-right'>
            <h2 className='font-medium text-lg'>Driver_name</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>TS 00 OO 0000</h4>
            <p className='text-sm text-gray-500'>Lord Alto</p>
        </div>
        </div>
        
        <div className="flex  gap-2 justify-center items-center flex-col">
          
        </div>
        <div className="w-full mt-5  gap-5">
          
          <div className="flex gap-5 items-center border-b-2 p-3">
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
        </div></div>
        <button className="w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg  text-white text-lg">Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding