import { validationResult } from "express-validator";
import { createRides, totalFare } from "../services/rideService.js";
import { getCaptainsInTheRadius, getLocationCoordinates } from "../services/Maps.service.js";
import { sendMessageToSocketId } from "../socket.js";
import rideModel from "../models/rideModel.js";

export const createRide = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId,pickup, destination, vehicleType } = req.body;

  try {
    // Create the ride in the database
    const ride = await createRides({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json(ride);


    const pickupCoordinates = await getLocationCoordinates(pickup);
   

    const captainsInRadius = await getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      2 
    );
 
     ride.otp="";
     const rideWithUser = await rideModel.findOne({_id:ride._id}).populate('user');
     
     captainsInRadius.map((captain) => {
        
        sendMessageToSocketId(captain.socketId, {
            event: "new-ride",
            data: rideWithUser, 
        });

    });
    


  } catch (error) {
    console.error("Error creating ride:", error.message);

    // Ensure no response is sent again if headers were already sent
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
};
    
 export const getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, dropoff } = req.query;
    try {
        const fare = await totalFare(pickup, dropoff);
        return res.status(200).json(fare);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
   

 }   