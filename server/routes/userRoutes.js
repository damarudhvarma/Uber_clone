import { Router } from "express";
import { body } from "express-validator";
import  {registerUser,LoginUser} from "../controllers/userController.js";

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



export default userRouter;