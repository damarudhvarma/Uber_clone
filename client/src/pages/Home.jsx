import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDrivers from "../components/WaitingForDrivers";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";
import LiveTracking from "../components/LiveTracking";
;

const Home = () => {
   const navigate = useNavigate();
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
  const [vehicleType, setVehicleType] = useState(null);

  const [waitingForDrivers, setwaitingForDrivers] = useState(false);
  const WaitingForDriversRef = useRef(null);

  const [suggestions, setSuggestions] = useState([]);

  const [activeField, setActiveField] = useState(null);

  const [fare, setfare] = useState({});

  const { sendMessage, receiveMessage, socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  const [OTP, setOTP] = useState("");

  useEffect(() => {
    sendMessage("join", { userType: "user", userId: user._id });
  }, [user]);

  const [ride, setRide] = useState(null);

  socket.on("ride-confirmed", (data) => {
    setwaitingForDrivers(true);
    setvehicleFound(false);
    setvehiclePanel(false);
    
    setRide(data);
  });

  socket.on("ride-started", (ride) => {
    setwaitingForDrivers(false);
    navigate("/riding", { state: { ride } });

  });


  const vehicles = {
    car: "https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg",
    motorcycle:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
  };

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const findCaptain = async () => {
    if (!pickup || !dropoff) {
      alert("Please enter both pickup and dropoff locations");
      return;
    }
    setvehiclePanel(true);
    setPanelopen(false);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, dropoff },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setfare(response.data);
  };

  const handleInputChange = (e, setState) => {
    const value = e.target.value;
    setState(value);
    fetchSuggestions(value);
    setPanelopen(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelopen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 22,
        duration: 1,
        display: "block",
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
          panelRef.current.style.display = "none";
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
          display: "block"
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        display: "none",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
        display: "block",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
        display: "none",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (waitingForDrivers) {
      gsap.to(WaitingForDriversRef.current, {
        transform: "translateY(0)",
        display: "block",
      });
    } else {
      gsap.to(WaitingForDriversRef.current, {
        transform: "translateY(100%)",
        display: "none",
      });
    }
  }, [waitingForDrivers]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
        display: "block",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
        display: "none",
      });
    }
  }, [vehicleFound]);

  async function createRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination: dropoff,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setOTP(response.data.otp);
  }

  return (
    <div>
      <div className="h-screen relative overflow-hidden ">
        
        <Link
            to="/user/logout"
            className=" h-10 top-3 right-2 z-30 w-10 bg-white flex items-center justify-center shadow-lg rounded-full absolute"
          >
            <i className="ri-logout-box-r-line"></i>
          </Link>
     
        <div className="h-screen w-screen">
        <LiveTracking />
        </div>

        <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
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
              <form onSubmit={(e) => submitHandler(e)}>
                <div className="line absolute h-20 w-1 top-[12.5%] left-4 bg-gray-700 rounded-full"></div>
                <input
                  className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mb-3"
                  type="text"
                  placeholder="Pick up location"
                  value={pickup}
                  onClick={() => {
                    setActiveField("pickup");
                    setPanelopen(true);
                  }}
                  onChange={(e) => handleInputChange(e, setpickup)}
                />
                <input
                  className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-3"
                  type="text"
                  placeholder="Drop off location"
                  value={dropoff}
                  onClick={() => {
                    setActiveField("dropoff");
                    setPanelopen(true);
                  }}
                  onChange={(e) => handleInputChange(e, setdropoff)}
                />
              </form>
              <button
                onClick={() => {
                  findCaptain();
                }}
                className="bg-black text-white w-full text-xl px-4 py-2 mt-4 rounded"
              >
                Find ride
              </button>
            </div>
          </div>
          <div ref={panelRef} className="opacity-0 bg-white p-5">
            <LocationSearchPannel
              setPanelopen={setPanelopen}
              setvehiclePanel={setvehiclePanel}
              suggestions={suggestions}
              setpickup={setpickup}
              setdropoff={setdropoff}
              activeField={activeField}
            />
          </div>
        </div>

        <div
          ref={vehiclePanelRef}
          className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12 bg-white"
        >
          <VehiclePanel
            setconfirmRidePanel={setconfirmRidePanel}
            setvehiclePanel={setvehiclePanel}
            fare={fare}
            setVehicleType={setVehicleType}
            vehicles={vehicles}
          />
        </div>

        <div
          ref={confirmRideRef}
          className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12 bg-white overflow-auto"
        >
          <ConfirmRide
            setconfirmRidePanel={setconfirmRidePanel}
            setvehicleFound={setvehicleFound}
            createRide={createRide}
            pickup={pickup}
            dropoff={dropoff}
            fare={fare}
            vehicleType={vehicleType}
            vehicles={vehicles}
          />
        </div>

        <div
          ref={vehicleFoundRef}
          className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12 bg-white overflow-auto"
        >
          <LookingForDriver
            setvehicleFound={setvehicleFound}
            pickup={pickup}
            dropoff={dropoff}
            fare={fare}
            vehicleType={vehicleType}
            vehicles={vehicles}
          />
        </div>

        <div
          ref={WaitingForDriversRef}
          className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12 bg-white overflow-auto"
        >
          <WaitingForDrivers setwaitingForDrivers={setwaitingForDrivers}
          ride={ride}
          otp={OTP}
          vehicles={vehicles}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
