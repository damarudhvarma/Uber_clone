import { validationResult } from 'express-validator';
import CaptainModel from '../models/captainModel.js';
import { createCaptain } from '../services/captainService.js';





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