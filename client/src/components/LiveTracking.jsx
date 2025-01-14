import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker, Circle } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '70%',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const circleOptions = {
    strokeColor: '#4285F4', 
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#4285F4',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 20, 
    zIndex: 1,
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);

    useEffect(() => {
        const handleSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude,
            });
        };

        const handleError = (error) => {
            console.error('Geolocation error:', error.message);
        };

        // Initial position fetch
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

        // Watch position changes
        const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError);

        // Cleanup watch
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                options={{
                    zoomControl: true, 
                    streetViewControl: true,
                    mapTypeControl: true,
                    fullscreenControl: false, 
                }}
            >
             
                <Circle
                    center={currentPosition}
                    options={circleOptions}
                />
                
                {/* <Marker position={currentPosition} /> */}
            </GoogleMap>
        </LoadScript>
    );
};

export default LiveTracking;
