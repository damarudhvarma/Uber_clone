import CaptainModel from '../models/captainModel.js';



export const createCaptain = async(
    {firstname,
    lastname,
    email,
    password,
    color,
    vehicleType,
    capacity,
    plate,}
)=>{

    if(!firstname || !lastname || !email || !password || !color || !vehicleType || !capacity || !plate){
        throw new Error('All fields are required');
    }
  
    const captain = await CaptainModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            color,
            vehicleType,
            capacity,
            plate,
        }
    });

 return captain;

}

