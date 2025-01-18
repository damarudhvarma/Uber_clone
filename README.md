# Uber Clone

This is an Uber clone built with the MERN stack. It uses JWT and bcrypt for authentication and authorization, and integrates Google Maps API for live location tracking and socket.io communication.

## Features

- User and Captain account creation and login
- Fill pickup and destination using Google Maps suggestions
- Choose vehicle of choice
- Ride requests sent to nearby captains within a 2 km pickup radius
- Notifications when a captain accepts the ride
- Real-time location tracking of captains

## Tech Stack

- **MongoDB**: NoSQL database for storing user and ride data
- **Express.js**: Backend framework for handling API requests
- **React.js**: Frontend library for building user interfaces
- **Node.js**: Backend runtime environment
- **JWT**: For secure authentication
- **bcrypt**: For hashing passwords
- **Google Maps API**: For location services
- **Socket.io**: For real-time communication

## Frontend Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the client folder:**

    ```bash
    cd client
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root of the client folder and add the following:**

    ```
    VITE_BASE_URL= SERVER_URL
    VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
    ```

5. **Run the client:**

    ```bash
    npm run dev
    ```

## Server Setup Instructions

1. **Navigate to the server directory:**

    ```bash
    cd server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root of the server folder and add the following:**

    ```
    PORT=your_port
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    ```

4. **Run the server:**

    ```bash
    npx nodemon
    ```

**NOTE:** This application is built for mobile screens only, so please view on a responsive screen.
