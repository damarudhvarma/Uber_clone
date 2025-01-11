import React, { createContext, useEffect } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

const socket = io(import.meta.env.VITE_BASE_URL); 

function SocketContextProvider({ children }) {
    useEffect(() => {
      
        socket.on("connect", () => {
            console.log("Connected to server with ID:", socket.id);
        });

     
        socket.on("disconnect", (reason) => {
            console.log("Disconnected from server:", reason);
        });

     
    }, []);

    const sendMessage = (eventName, message) => {
        socket.emit(eventName, message);
    };

    const receiveMessage = (eventName, callback) => {
        socket.on(eventName, callback);
    };

    return (
        <SocketContext.Provider value={{socket, sendMessage, receiveMessage }}>
            {children}
        </SocketContext.Provider>
    );
}

export default SocketContextProvider;
