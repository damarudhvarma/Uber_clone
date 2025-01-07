import React from "react";

const VehiclePanel = ({
  setvehiclePanel,
  fare,
  setVehicleType,
  setconfirmRidePanel,
  vehicles,
}) => {

  return (
    <div>
      <h5
        onClick={() => setvehiclePanel(false)}
        className="absolute  p-1 top-0 w-[95%] text-center  text-2xl text-gray-300"
      >
        <i className=" text-3xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vechile</h3>
      <div
        onClick={() => {
          setVehicleType("car");
          setconfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 justify-between items-center "
      >
        <img
          className="h-20 object-center "
          src={vehicles.car}
          alt="car"
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
        <h2 className="font-semibold text-lg">₹{fare.car}</h2>
      </div>
      <div
        onClick={() => {
          setVehicleType("motorcycle");
          setconfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 justify-between items-center "
      >
        <img
          className="h-12 object-center "
          src={vehicles.motorcycle}
          alt="moto"
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
        <h2 className="font-semibold text-lg">₹{fare.motorcycle}</h2>
      </div>
      <div
        onClick={() => {
          setVehicleType("auto");
          setconfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 justify-between items-center "
      >
        <img
          className="h-12 object-center "
          src={vehicles.auto}
          alt="auto"
        />

        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-base">2 min away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="font-semibold text-lg">₹{fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
