import { Server } from 'socket.io';
import userModel from './models/userModule.js';
import captainModel from './models/captainModel.js';

let io;

export function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const { userId, userType } = data;

            try {
                if (userType == 'user') {
                    await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
                } else if (userType === 'captain') {
                    await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
                }
            } catch (error) {
                console.error(`Error in join event: ${error.message}`);
                socket.emit('error', { message: 'Failed to join socket room' });
            }
        });

        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || typeof location.ltd === 'undefined' || typeof location.lng === 'undefined') {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            try {
                await captainModel.findByIdAndUpdate(userId, {
                    location: {
                        ltd: location.ltd,
                        lng: location.lng,
                    },
                });
                console.log(`Location updated for captain ${userId}`);
            } catch (error) {
                console.error(`Error updating location: ${error.message}`);
                socket.emit('error', { message: 'Failed to update location' });
            }
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

export function sendMessageToSocketId(socketId, messageObject) {
  
    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
        console.log("sent message to socketId")
    } else {
        console.error('Socket.io not initialized.');
    }
}
