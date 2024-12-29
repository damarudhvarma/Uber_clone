import { Router } from "express";
import { body } from "express-validator";
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captainController.js";
import { authCaptain } from "../middlewares/authMiddleware.js";

const captainRouter = Router();

captainRouter.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('fullname').isLength({ min: 3 }).withMessage('Fullname must be atleast 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.vehicleType').isIn(['car','auto','motorcycle']).withMessage('vehicleType must be either car,auto or motorcycle'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be a number'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate Number must be atleast 3 characters long'),
    ],
    registerCaptain,
);

captainRouter.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    ],
    loginCaptain,
);

captainRouter.get('/profile', authCaptain ,getCaptainProfile);
captainRouter.get('/logout', authCaptain,logoutCaptain);



export default captainRouter;