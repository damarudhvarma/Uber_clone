import { Router } from "express";
import { body, query } from "express-validator";
import { confrimRide, createRide, endRide, getFare, startRide } from "../controllers/rideController.js";
import { authCaptain, authUser } from "../middlewares/authMiddleware.js";

const rideRouter = Router();

rideRouter.post("/create",
    authUser,
    body('pickup').isString().notEmpty().withMessage('Pickup is required'),
    body('destination').isString().notEmpty().withMessage('Destination is required'),
    body('vehicleType').isString().isIn(['auto','motorcycle','car']).notEmpty().withMessage('Vehicle Type is required'),
    createRide
 );

 rideRouter.get("/get-fare",authUser,
    query('pickup').isString().notEmpty().withMessage('Pickup is required'),
    query('dropoff').isString().notEmpty().withMessage('Destination is required'),
    getFare
 );

 rideRouter.post("/confrim",authCaptain,
    body('rideId').isMongoId().notEmpty().withMessage('Ride is required'),
    confrimRide
 );

 rideRouter.post("/start-ride",authCaptain,
      body('rideId').isMongoId().notEmpty().withMessage('Ride is required'),
      body('otp').isString().notEmpty().withMessage('OTP is required'),
      startRide
      
 )
 
 rideRouter.post("/end-ride",authCaptain,
      body('rideId').isMongoId().notEmpty().withMessage('Ride is required'),  
      endRide
   )



export default rideRouter;