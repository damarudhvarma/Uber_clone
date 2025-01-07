import { Router } from "express";
import { body } from "express-validator";
import { createRide } from "../controllers/rideController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const rideRouter = Router();

rideRouter.post("/create",
    authUser,
    body('pickup').isString().notEmpty().withMessage('Pickup is required'),
    body('destination').isString().notEmpty().withMessage('Destination is required'),
    body('vehicleType').isString().isIn(['auto','motorcycle','car']).notEmpty().withMessage('Vehicle Type is required'),
    createRide
 );




export default rideRouter;