import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "./FinishRide";

const CaptainRiding = () => {

const FinshRidePanelRef = useRef(null);
const [finishRidePanel, setFinishRidePanel] = useState(false);
const rideData = useLocation().state?.ride;

    useGSAP(() => {
        if (finishRidePanel) {
          gsap.to(FinshRidePanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(FinshRidePanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      }, [finishRidePanel]);


  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full ">
        <img
          className="w-16  left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center shadow-lg rounded-full  "
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5 ">
        <img
          className="object-cover h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className="h-1/5 w-screen p-6 flex justify-between items-center bg-black text-white relative
      "
      onClick={()=>{
            setFinishRidePanel(true);
      }} 
      >
        <h5
          onClick={() => {}}
          className="absolute  p-1 top-0 w-[95%]  right-4 text-center  text-gray-300"
        >
          <i className=" text-3xl ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button className="w-ful flex justify-center  bg-green-700 font-semibold p-3 rounded-lg  text-white text-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={FinshRidePanelRef}
        className="fixed z-10 w-full h-screen translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
           <FinishRide setFinishRidePanel={setFinishRidePanel}
           rideData={rideData}
           />
      </div>
    </div>
  );
};

export default CaptainRiding;
