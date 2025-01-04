import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDrivers from "../components/WaitingForDrivers";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [dropoff, setdropoff] = useState("");
  const [panelopen, setPanelopen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelcloseRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);

  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);

  const [vehicleFound, setvehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [waitingForDrivers, setwaitingForDrivers] = useState(false);
  const WaitingForDriversRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelopen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 22,
        duration: 1,
        display: "block", // Ensure the panel is visible
        opacity: 1,
      });
      gsap.to(panelcloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 1,
        opacity: 0,
        onComplete: () => {
          panelRef.current.style.display = "none"; // Hide the panel after the animation
        },
      });
      gsap.to(panelcloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelopen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (waitingForDrivers) {
      gsap.to(WaitingForDriversRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(WaitingForDriversRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDrivers]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber"
      />

      <div className="h-screen w-screen">
        <img
          onClick={() => setvehiclePanel(false)}
          className="object-cover h-full w-full"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="map"
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0  w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            ref={panelcloseRef}
            onClick={() => setPanelopen(false)}
            className="absolute opacity-0 top-6 right-3 text-2xl text-gray-500"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold mb-3">Find a trip </h4>
          <div className="relative">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="line absolute h-20 w-1 top-[18%] left-4 bg-gray-700 rounded-full "></div>
              <input
                className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full  mb-3"
                type="text"
                placeholder="Pick up location"
                value={pickup}
                onChange={(e) => setpickup(e.target.value)}
                onClick={() => setPanelopen(true)}
              />
              <input
                className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-3"
                type="text"
                placeholder="Drop off location"
                value={dropoff}
                onChange={(e) => setdropoff(e.target.value)}
                onClick={() => setPanelopen(true)}
              />
            </form>
          </div>
        </div>
        <div ref={panelRef} className=" opacity-0 bg-white p-5 ">
          <LocationSearchPannel
            setPanelopen={setPanelopen}
            setvehiclePanel={setvehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12  bg-white "
      >
        <VehiclePanel
          setconfirmRidePanel={setconfirmRidePanel}
          setvehiclePanel={setvehiclePanel}
        />
      </div>

      <div
        ref={confirmRideRef}
        className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
        <ConfirmRide setconfirmRidePanel={setconfirmRidePanel}  setvehicleFound={setvehicleFound}/>
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
       <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>
      <div
        ref={WaitingForDriversRef}
        className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
            <WaitingForDrivers setwaitingForDrivers={setwaitingForDrivers} />
      </div>
    </div>
  );
};

export default Home;
