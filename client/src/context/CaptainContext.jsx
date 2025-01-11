import React, { createContext } from 'react'
import { useState } from 'react';


export const CaptainDataContext= createContext();

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const updateCaptain = (captain) => {
        setCaptain(captain);
    };
   
  return (
        <CaptainDataContext.Provider value={{captain, setCaptain, isLoading, setIsLoading, error, setError, updateCaptain}}>    
            {children}
        </CaptainDataContext.Provider>    
)
}

export default CaptainContext