import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "./FinishRide";
import LiveTracking from "../components/LiveTracking";

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
          className="h-10 w-10 flex items-center justify-center shadow-lg rounded-full  "
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-screen relative ">
        <LiveTracking />

        <div
          className=" absolute w-screen h-[30%] p-6 flex justify-between items-center bg-black text-white 
      "
          onClick={() => {
            setFinishRidePanel(true);
          }}
        >
          <h5
            className="absolute  p-1 top-0 w-[95%]  right-4 text-center  text-gray-300"
          >
            <i className=" text-3xl ri-arrow-up-wide-line"></i>
          </h5>
          
          <button className="w-full flex justify-center  bg-green-700 font-semibold p-3 rounded-lg bottom-0  text-white text-lg">
            Complete Ride
          </button>
      </div>
      </div>
      <div
        ref={FinshRidePanelRef}
        className="fixed z-10 w-full h-screen translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
        <FinishRide
          setFinishRidePanel={setFinishRidePanel}
          rideData={rideData}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
