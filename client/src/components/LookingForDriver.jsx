import React from "react";

const LookingForDriver = ({setvehicleFound,pickup,
  dropoff,
  fare,
  vehicleType,
  vehicles,}) => {
  return (
    <div>
      <div>
        {" "}
        <h5
          onClick={() =>setvehicleFound(false)}
          className="absolute  p-1 top-0 w-[93%] text-center  text-gray-300"
        >
          <i className=" text-3xl ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-3">Looking for a Driver</h3>
        <div className="flex  gap-2 justify-center items-center flex-col">
          <img
            className="h-28 "
            src={vehicles[vehicleType]}
            alt={vehicleType}
          />
        </div>
        <div className="w-full mt-5  gap-5">
          <div className="flex gap-5 items-center border-b-2 p-3">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h4 className="text-lg font-medium">{pickup.split(",")[0]}</h4>
              <p className="text-sm -mt-1 text-gray-600">{pickup}</p>
            </div>
          </div>
          <div className="flex gap-5 items-center border-b-2 p-3">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className="text-lg font-medium">{dropoff.split(",")[0]}</h4>
              <p className="text-sm -mt-1 text-gray-600">{dropoff}</p>
            </div>
          </div>
          <div className="flex gap-5 items-center  p-3">
            {" "}
            <i className="ri-currency-line"></i>
            <div>
              <h4 className="text-lg font-medium">₹{fare[vehicleType]}</h4>
              <p className="text-sm -mt-1 text-gray-600">Total fare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
