import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'


const CaptianHome = () => {
  
  const [ridePopupPanel, setridePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);

  const [confirmRidePopup, setConfirmRidePopup] = useState(false);
  const confirmRidePopupRef = useRef(null);

  const {sendMessage,socket} = useContext(SocketContext) 
  const {captain}=useContext(CaptainDataContext)
  const  [ride, setRide] = useState(null);

  useEffect(() => {
    if (!captain || !captain._id) {
      console.error("Captain data is missing!");
      return;
    } 
    sendMessage("join", {
      userId: captain._id,
      userType: "captain",
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          sendMessage("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const intervalId = setInterval(updateLocation, 10000);

    updateLocation();

    return () => {
      clearInterval(intervalId);
    };
  }, []);
 
 socket.on('new-ride', (data)=>{  
  setRide(data);
  setridePopupPanel(true);
 })

  const confirmRide = async ()=>{
   const  res = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confrim`,{
     captainId:captain._id,
     rideId:ride._id,
    },{ headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
    setConfirmRidePopup(true);
    setridePopupPanel(false);

  }


  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);
  
  useGSAP(() => {
    if (confirmRidePopup) {
      gsap.to(confirmRidePopupRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopup]);



  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-full '>
      <img
        className="w-16  left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber"
      />
      <Link to='/captain-logout' className='h-10 w-10 bg-white flex items-center justify-center shadow-lg rounded-full  '>
      <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
        <div className='h-3/5 '>
        <img
          
          className="object-cover h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
        </div>
        <div className='h-2/5 p-6'>
       <CaptainDetails/>
        </div>
        <div>
        <div
        ref={ridePopupPanelRef}
        className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
           <RidePopup setridePopupPanel={setridePopupPanel}
           setConfirmRidePopup={setConfirmRidePopup}
           ride={ride}
            confirmRide={confirmRide}
           />
      </div>
        <div
        ref={confirmRidePopupRef}
        className="fixed z-10 w-full h-screen translate-y-full bottom-0 px-3 py-10 pt-12  bg-white overflow-auto"
      >
           <ConfirmRidePopup setConfirmRidePopup={setConfirmRidePopup} setridePopupPanel={setridePopupPanel}
           ride={ride}
           />
      </div>
        </div>

    </div>
  )
}

export default CaptianHome