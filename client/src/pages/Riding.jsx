import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext';


const Riding = () => {
  
  const rideData = useLocation().state?.ride;
   
  const {socket} = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", (data) => {
    navigate("/home");
  })

   
   const vehicles = {
    car: "https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg",
    motorcycle:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
  };

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
        <div className='flex items-center justify-between mt-4'>
        <img
          className="h-16 "
         src={vehicles[rideData?.captain.vehicle.vehicleType]}
            alt={rideData?.captain.vehicle.vehicleType}
        />
        <div className='text-right'>
            <h2 className='font-medium text-lg capitalize'>{rideData?.captain.fullname
.firstname +" "+rideData?.captain.fullname
.lastname            }</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{rideData?.captain.vehicle
.plate}</h4>
           
        </div>
        </div>
        
        <div className="flex  gap-2 justify-center items-center flex-col">
          
        </div>
        <div className="w-full mt-5  gap-5">
          
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
        </div></div>
        <button className="w-full mt-5 bg-black font-semibold p-2 rounded-lg  text-white text-lg">Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding