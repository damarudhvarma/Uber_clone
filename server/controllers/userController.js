import { validationResult } from "express-validator";
import UserModel from "../models/userModule.js";
import {createUser} from "../services/userServices.js"; 

export const registerUser = async (req, res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }

    const { fullname,email, password, } = req.body;
    const isUserAlreadyExist = await UserModel.findOne({
        email,
    });
    if(isUserAlreadyExist){
        return res.status(400).json({message: 'User already exist'});
    }

    const hashPassword = await UserModel.hashPassword(password);
    const user = await createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
}


export const LoginUser = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }

    const { email, password } = req.body;
    const user = await UserModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message: 'Invalid Email or Password'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid Email or Password'});
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user });
    

}


export const getUserProfile = async (req, res) => {
    res.status(200).json(req.user);

}


export const logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message: 'Logged Out Successfully'});
}