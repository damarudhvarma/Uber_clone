import rideModel from "../models/rideModel.js";
import { getDistance } from "./Maps.service.js";
import crypto from 'crypto';


async function getFare(pickup,dropoff) {

        if(!pickup || !dropoff){
            throw new Error('Pickup and Destination are required');
        }
        const distanceTime = await getDistance(pickup, dropoff);


// Parse distance and duration from the distanceTime object
const distanceInKm = parseFloat(distanceTime.distance.replace(' km', ''));
const durationInMinutes = parseFloat(distanceTime.duration.replace(' mins', ''));

const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20
};

const perKmRate = {
    auto: 10,
    car: 15,
    motorcycle: 8
};

const perMinuteRate = {
    auto: 2,
    car: 3,
    motorcycle: 1.5
};

const fare = {
    auto: Math.round(baseFare.auto + (distanceInKm * perKmRate.auto) + (durationInMinutes * perMinuteRate.auto)),
    car: Math.round(baseFare.car + (distanceInKm * perKmRate.car) + (durationInMinutes * perMinuteRate.car)),
    motorcycle: Math.round(baseFare.motorcycle + (distanceInKm * perKmRate.motorcycle) + (durationInMinutes * perMinuteRate.motorcycle))
};

return fare;
    

}

export const totalFare= getFare;

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}




export const createRides= async ({user,pickup,destination,vehicleType})=>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('User, Pickup, Destination and Vehicle Type are required');
    }

    const fare = await getFare(pickup, destination);

    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType],
    });

    return ride;
}