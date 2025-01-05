import React from "react";

const ConfirmRide = ({ setconfirmRidePanel,setvehicleFound }) => {
  return (
    <div className="">
      {" "}
      <h5
        onClick={() => setconfirmRidePanel(false)}
        className="absolute  p-1 top-0 w-[93%] text-center  text-gray-300"
      >
        <i className=" text-3xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Confirm your Ride</h3>

      <div className="flex  gap-2 justify-center items-center flex-col">
        <img
          className="h-28 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
          alt="car"
        />
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
      <button
      onClick={()=>{setvehicleFound(true)
        setconfirmRidePanel(false)}
      }

      className="w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg  text-white text-lg">
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRide;
