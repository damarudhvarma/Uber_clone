import UserModel from "../models/userModule.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import BlacklistTokenModel from "../models/blacklistTokensModel.js";
import CaptainModel from "../models/captainModel.js";


export const authUser = async (req, res, next) => { 
    const token = req.cookies.token|| req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
    const isblacklisted = await BlacklistTokenModel.findOne({token: token});

      if(isblacklisted){
        return res.status(401).json({message: 'Unauthorized'}); 
    }

    try {
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id);
        req.user = user;
        return next();
        
    } catch (error) {
        return res.status(401).send(error.message);
    }
}

export const authCaptain = async (req, res, next) => {  
    const token = req.cookies.token|| req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
    const isblacklisted = await BlacklistTokenModel.findOne({token: token});

      if(isblacklisted){
        return res.status(401).json({message: 'Unauthorized'}); 
    }

    try {
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await CaptainModel.findById(decoded._id);
        req.captain = captain;
        return next();
        
    } catch (error) {
        return res.status(401).send(error.message);
    }
}