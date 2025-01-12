import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = ({setFinishRidePanel,rideData}) => {
  
  return (
    <div className=''>
    {" "}
    <h5
        onClick={() => {
            setFinishRidePanel(false);
        }}
      className="absolute  p-1 top-0 w-[93%] text-center  text-gray-300"
    >
      <i className=" text-3xl ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-4">Finish Ride</h3>
    <div className='flex items-center justify-between p-3 bg-black rounded-lg mt-4'>
        <div className='flex items-center gap-3  '>
        <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/q30mtGI6Uq8L1sU9H02hXDiETyRoSxEtuLtXNNmTvSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24teW91bmct/dXNlci1pY29uLTI0/MDAucG5n" alt="user" />
        <h2 className='text-lg font-medium text-white'>{rideData?.user.fullname.firstname+" "+rideData?.user.fullname.lastname}</h2>
        </div>
        
    </div>
    <div className="w-full mt-5  gap-5">
      <div className="flex gap-5 items-center border-b-2 p-3">
        <i className=" text-lg ri-map-pin-user-fill"></i>
        <div>
              <h4 className="text-lg font-medium">{rideData?.pickup.split(" ")[0]}</h4>
              <p className="text-sm -mt-1 text-gray-600">{rideData?.pickup} </p>
            </div>
          </div>
          <div className="flex gap-5 items-center border-b-2 p-3">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className="text-lg font-medium">{rideData?.destination.split(",")[0]
              }</h4>
              <p className="text-sm -mt-1 text-gray-600">{rideData?.destination
              } </p>
            </div>
          </div>
          <div className="flex gap-5 items-center  p-3">
            {" "}
            <i className="ri-currency-line"></i>
            <div>
              <h4 className="text-lg font-medium">₹{rideData?.fare}</h4>
              <p className="text-sm -mt-1 text-gray-600">price</p>
            </div>
      </div>
    </div>
    <form action=""></form>
   <div className='mt-6'>
   <Link  to ='/captain-home'
    className="w-ful flex justify-center mt-5 bg-black font-semibold p-4 rounded-lg  text-white text-lg">
      Finish Ride
    </Link>
    <p className='text-xs text-center text-red-500 mt-6'>Click on finish ride if you have completed the payment.</p>
    </div>
   
  </div>
  )
}

export default FinishRide