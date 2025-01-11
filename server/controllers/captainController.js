import { validationResult } from 'express-validator';
import CaptainModel from '../models/captainModel.js';
import { createCaptain } from '../services/captainService.js';
import BlacklistTokenModel from '../models/blacklistTokensModel.js';





export const registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {
        fullname,
        email,
        password,
        vehicle
    } = req.body;

    const isCaptainAlreadyExist = await CaptainModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({error:'Captain already exist'});
    }

    const hashPassword = await CaptainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
        color:vehicle.color,
        vehicleType:vehicle.vehicleType,
        capacity:vehicle.capacity,
        plate:vehicle.plate,
    })

    const token = await captain.generateAuthToken();

    return res.status(201).json({token,captain});


}

export const loginCaptain = async(req,res,next)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {email,password} = req.body;
const captain = await CaptainModel.findOne({email}).select('+password');
if(!captain){
    return res.status(404).json({error:'invalid email or password'});
}

const isPasswordMatch = await captain.comparePassword(password);
if(!isPasswordMatch){
    return res.status(400).json({error:'Invalid email or Password'});    
}
const token = await captain.generateAuthToken();
res.cookie('token',token);
res.status(200).json({token,captain});
};


export const getCaptainProfile = async(req,res,next)=>{
    return res.status(200).json({captain:req.captain});
}

export const logoutCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(400).json({ message: 'Token not provided' });
        }

        // Check if the token is already in the blacklist
        const existingToken = await BlacklistTokenModel.findOne({ token });
        if (!existingToken) {
            // Add token to the blacklist
            await BlacklistTokenModel.create({ token });
        }

        // Clear the cookie and respond
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logout Successfully' });
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
