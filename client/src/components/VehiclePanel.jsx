import React from "react";

const VehiclePanel = ({ setvehiclePanel, setconfirmRidePanel }) => {
  return (

      <div>
        <h5
          onClick={() => setvehiclePanel(false)}
          className="absolute  p-1 top-0 w-[95%] text-center  text-2xl text-gray-300"
        >
         
          <i className=" text-3xl ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vechile</h3>
        <div onClick={()=>{
            setconfirmRidePanel(true)
        }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 justify-between items-center ">
          <img
            className="h-20 object-center "
            src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
            alt=""
          />

          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-base">2 min away </h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="font-semibold text-lg">₹192.4</h2>
        </div>
        <div onClick={()=>{
            setconfirmRidePanel(true)
        }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 justify-between items-center ">
          <img
            className="h-12 object-center "
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />

          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-base">3 min away </h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, Motorcycle rides
            </p>
          </div>
          <h2 className="font-semibold text-lg">₹65.17</h2>
        </div>
        <div onClick={()=>{
            setconfirmRidePanel(true)
        }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 justify-between items-center ">
          <img
            className="h-12 object-center "
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />

          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-base">2 min away </h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, Auto rides
            </p>
          </div>
          <h2 className="font-semibold text-lg">₹118.21</h2>
        </div>
      </div>
    
  );
};

export default VehiclePanel;
