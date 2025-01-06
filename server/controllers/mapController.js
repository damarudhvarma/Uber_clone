
import { validationResult } from 'express-validator';
import { getDistance, getLocationCoordinates,getAutoCompletionSuggestions } from '../services/Maps.service.js';


export const getCoordinates = async (req,res,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const {address} = req.query;

    try {
        const coordinates = await getLocationCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' });
    }

    }     

export const getDistanceController = async (req,res,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        const {origin, destination} = req.query;
        const distance = await getDistance(origin, destination);
        res.status(200).json({distance});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}


export const getAutoCompletionSuggestionsController= async (req,res,next)=>{
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {input} = req.query;
        const suggestions = await getAutoCompletionSuggestions(input);
        res.status(200).json(suggestions);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}
