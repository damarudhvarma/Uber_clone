import axios from 'axios';

export const getLocationCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getDistance = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and Destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const res = await axios.get(url);
        if (res.data.status === 'OK') {
            if (res.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No route found');
            }
            const element = res.data.rows[0].elements[0];
            return {
                distance: element.distance.text,
                duration: element.duration.text
            };
        } else {
            throw new Error('Unable to fetch distance');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const getAutoCompletionSuggestions = async (input) => {
     
    if(!input){
        throw new Error('Input is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
        
    } catch (error) {
        console.error(error);
        throw error;
        
    }


}