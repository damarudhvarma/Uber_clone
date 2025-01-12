import React from 'react'

const WaitingForDrivers = ({setwaitingForDrivers,ride,otp,vehicles}) => {
  
  return (
    <div>
        {" "}
        <h5
          onClick={() => setwaitingForDrivers(false)}
          className="absolute  p-1 top-0 w-[93%] text-center  text-gray-300"
        >
          <i className=" text-3xl ri-arrow-down-wide-line"></i>
        </h5>

        <div className='flex items-center justify-between'>
        <img
          className="h-16 "
         src={vehicles[ride?.captain.vehicle.vehicleType]}
            alt={ride?.captain.vehicle.vehicleType}
        />
        <div className='text-right'>
            <h2 className='font-medium text-lg'>{ride?.captain.fullname
.firstname +" "+ride?.captain.fullname
.lastname            }</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle
.plate}</h4>
            <h2 className='text-lg text-black font-semibold mt-2'>OTP : {otp}</h2>
        </div>
        </div>
        
        <div className="flex  gap-2 justify-center items-center flex-col">
          
        </div>
        <div className="w-full mt-5  gap-5">
          <div className="flex gap-5 items-center border-b-2 p-3">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            
            <div>
              <h4 className="text-lg font-medium">{ride?.pickup.split(" ")[0]}</h4>
              <p className="text-sm -mt-1 text-gray-600">{ride?.pickup} </p>
            </div>
          </div>
          <div className="flex gap-5 items-center border-b-2 p-3">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className="text-lg font-medium">{ride?.destination.split(",")[0]
              }</h4>
              <p className="text-sm -mt-1 text-gray-600">{ride?.destination
              } </p>
            </div>
          </div>
          <div className="flex gap-5 items-center  p-3">
            {" "}
            <i className="ri-currency-line"></i>
            <div>
              <h4 className="text-lg font-medium">₹{ride?.fare}</h4>
              <p className="text-sm -mt-1 text-gray-600">price</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WaitingForDrivers