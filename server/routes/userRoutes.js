import { Router } from "express";
import { body } from "express-validator";
import  {registerUser,LoginUser,getUserProfile, logoutUser} from "../controllers/userController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('fullname').isLength({ min: 3 }).withMessage('Fullname must be atleast 3 characters long')
    ],
    registerUser,
 );


userRouter.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    ],
    LoginUser,
 );

userRouter.get('/profile',authUser ,getUserProfile); 
userRouter.get('/logout',authUser,logoutUser);



export default userRouter;