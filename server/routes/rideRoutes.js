import { Router } from "express";
import { body, query } from "express-validator";
import { createRide, getFare } from "../controllers/rideController.js";
import { authUser } from "../middlewares/authMiddleware.js";

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




export default rideRouter;