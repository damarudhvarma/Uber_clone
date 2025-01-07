import { validationResult } from "express-validator";
import { createRides, totalFare } from "../services/rideService.js";

export const createRide = async (req, res) => {
     const errors = validationResult(req);
     
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()}); 
        }
        const { userId, pickup, destination, vehicleType } = req.body;
        try {
            const ride= await createRides({user: req.user._id, pickup, destination, vehicleType});
            return res.status(201).json(ride);
        } catch (error) {
            return res.status(500).json({error:error.message});
        }

    } 
    
    
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