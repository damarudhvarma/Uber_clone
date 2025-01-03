import React, { useRef } from "react";
import { useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from "../components/LocationSearchPannel";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [dropoff, setdropoff] = useState("");
  const [panelopen, setPanelopen] = useState(false);
  const panelRef= useRef(null);
  const panelcloseRef= useRef(null);


const submitHandler = (e) => {  
    e.preventDefault();
}

useGSAP(() => {
  if (panelopen) {
    gsap.to(panelRef.current, {
      height: '70%',
      padding: 22,
      duration: 1,
      display: 'block', // Ensure the panel is visible
      opacity: 1,
    });
    gsap.to(panelcloseRef.current, {
      opacity: 1,
    });
  } else {
    gsap.to(panelRef.current, {
      height: '0%',
     duration:1,
     opacity: 0,
      onComplete: () => {
        panelRef.current.style.display = 'none'; // Hide the panel after the animation
      },
    });
    gsap.to(panelcloseRef.current, {
      opacity: 0,
    });
  }
}, [panelopen]);

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber"
      />

      <div className="h-screen w-screen">
        <img className="object-cover h-full w-full" src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0  w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h5 ref={panelcloseRef} onClick={() => setPanelopen(false)}   
           className="absolute opacity-0 top-6 right-3 text-2xl text-gray-500">
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip </h4>
          <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full "></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Pick up location"
              value={pickup}
              onChange={(e) => setpickup(e.target.value)}
              onClick={() => setPanelopen(true)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Drop off location"
              value={dropoff}
              onChange={(e) => setdropoff(e.target.value)}
              onClick={() => setPanelopen(true)}
            />
          </form>
        </div>
        <div ref={panelRef} className = " opacity-0 bg-white p-5 ">
          <LocationSearchPannel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
