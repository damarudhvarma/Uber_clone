# Backend API Documentation

## User Registration Endpoint

### Endpoint
`POST /users/register`

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The user's first name (string, required)
  - `lastname`: The user's last name (string, required)
- `email`: The user's email address (string, required, must be a valid email)
- `password`: The user's password (string, required, must be at least 6 characters long)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
#### Success (201 Created)
- The user is successfully registered.
- Returns a JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)
- The request body is invalid or missing required fields.
- Returns a JSON object containing the error details.

Example:
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: The user's email address (string, required, must be a valid email)
- `password`: The user's password (string, required, must be at least 6 characters long)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
#### Success (200 OK)
- The user is successfully logged in.
- Returns a JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)
- The request body is invalid or missing required fields.
- Returns a JSON object containing the error details.

Example:
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)
- The email or password is incorrect.
- Returns a JSON object containing the error message.

Example:
```json
{
  "message": "Invalid Email or Password"
}
```

## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint is used to get the profile of the currently authenticated user. It requires the user to be authenticated.

### Response
#### Success (200 OK)
- The user's profile is successfully retrieved.
- Returns a JSON object containing the user details.

Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Error (401 Unauthorized)
- The user is not authenticated.
- Returns a JSON object containing the error message.

Example:
```json
{
  "message": "Not authorized, token failed"
}
```

## User Logout Endpoint

### Endpoint
`GET /users/logout`

### Description
This endpoint is used to log out the currently authenticated user. It requires the user to be authenticated.

### Response
#### Success (200 OK)
- The user is successfully logged out.
- Returns a JSON object containing a success message.

Example:
```json
{
  "message": "Logged Out Successfully"
}
```

#### Error (401 Unauthorized)
- The user is not authenticated.
- Returns a JSON object containing the error message.

Example:
```json
{
  "message": "Not authorized, token failed"
}
```

## Captain Registration Endpoint

### Endpoint
`POST /captains/register`

### Description
Register a new captain with their vehicle details.

### Request Body
Required fields:
- `fullname`: Object containing:
  - `firstname`: String (min 3 characters)
  - `lastname`: String (min 3 characters) 
- `email`: String (valid email format)
- `password`: String (min 6 characters)
- `vehicle`: Object containing:
  - `color`: String (min 3 characters)
  - `plate`: String (min 3 characters)
  - `capacity`: Number (min value: 1)
  - `vehicleType`: String (must be 'car', 'auto' or 'motorcycle')

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com", 
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "TS 00 AB 000",
    "capacity": 1,
    "vehicleType": "car"
  }
}
```

### Response
#### Success (201 Created)
Returns authentication token and captain details.

Example:
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "TS 00 AB 000",
      "capacity": 1,
      "vehicleType": "car"
    }
  }
}
```

#### Error (400 Bad Request)
Returns validation errors or duplicate email error.

Example (Validation Error):
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

Example (Duplicate Email):
```json
{
  "error": "Captain already exist"
}
```

## Captain Login Endpoint

### Endpoint
`POST /captains/login`

### Description
This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: The captain's email address (string, required, must be a valid email)
- `password`: The captain's password (string, required, must be at least 6 characters long)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
#### Success (200 OK)
- The captain is successfully logged in.
- Returns a JSON object containing the authentication token and captain details.

Example:
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "TS 00 AB 000",
      "capacity": 1,
      "vehicleType": "car"
    }
  }
}
```

#### Error (400 Bad Request)
- The request body is invalid or missing required fields.
- Returns a JSON object containing the error details.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)
- The email or password is incorrect.
- Returns a JSON object containing the error message.

Example:
```json
{
  "error": "Invalid email or password"
}
```

## Captain Profile Endpoint

### Endpoint
`GET /captains/profile`

### Description
This endpoint is used to get the profile of the currently authenticated captain. It requires the captain to be authenticated.

### Response
#### Success (200 OK)
- The captain's profile is successfully retrieved.
- Returns a JSON object containing the captain details.

Example:
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "TS 00 AB 000",
      "capacity": 1,
      "vehicleType": "car"
    }
  }
}
```

#### Error (401 Unauthorized)
- The captain is not authenticated.
- Returns a JSON object containing the error message.

Example:
```json
{
  "message": "Not authorized, token failed"
}
```

## Captain Logout Endpoint

### Endpoint
`GET /captains/logout`

### Description
This endpoint is used to log out the currently authenticated captain. It requires the captain to be authenticated.

### Response
#### Success (200 OK)
- The captain is successfully logged out.
- Returns a JSON object containing a success message.

Example:
```json
{
  "message": "Logout Successfully"
}
```

#### Error (401 Unauthorized)
- The captain is not authenticated.
- Returns a JSON object containing the error message.

Example:
```json
{
  "message": "Not authorized, token failed"
}
```

## Maps Endpoints

### Get Coordinates

#### Endpoint
`GET /maps/get-coordinates`

#### Description
Fetches the coordinates (latitude and longitude) for a given address.

#### Request Parameters
- `address`: The address to get coordinates for (string, required, minimum length 3 characters)

#### Response
##### Success (200 OK)
Returns the coordinates for the given address.

Example:
```json
{
  "lat": 17.385044,
  "lng": 78.486671
}
```

##### Error (400 Bad Request)
Returns validation errors if the address is invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "Address must be at least 3 characters long",
      "param": "address",
      "location": "query"
    }
  ]
}
```

##### Error (404 Not Found)
Returns an error if the coordinates could not be found.

Example:
```json
{
  "message": "Coordinates not found"
}
```

### Get Distance and Time

#### Endpoint
`GET /maps/get-distance-time`

#### Description
Fetches the distance and estimated travel time between two locations.

#### Request Parameters
- `origin`: The starting location (string, required, minimum length 3 characters)
- `destination`: The destination location (string, required, minimum length 3 characters)

#### Response
##### Success (200 OK)
Returns the distance and estimated travel time between the origin and destination.

Example:
```json
{
  "distance": "10 km",
  "duration": "20 mins"
}
```

##### Error (400 Bad Request)
Returns validation errors if the origin or destination is invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "Origin must be at least 3 characters long",
      "param": "origin",
      "location": "query"
    },
    {
      "msg": "Destination must be at least 3 characters long",
      "param": "destination",
      "location": "query"
    }
  ]
}
```

##### Error (500 Internal Server Error)
Returns an error if there was an issue fetching the distance and time.

Example:
```json
{
  "message": "Unable to fetch distance"
}
```

### Get Auto-Completion Suggestions

#### Endpoint
`GET /maps/get-suggestions`

#### Description
Fetches auto-completion suggestions for a given input.

#### Request Parameters
- `input`: The input string to get suggestions for (string, required)

#### Response
##### Success (200 OK)
Returns a list of suggestions for the given input.

Example:
```json
[
  "Hyderabad, Telangana, India",
  "Hyde Park Winter Wonderland, Louisa Duckworth Walk, London, UK",
  "Hyde Park, London, UK",
  "Hyderabad, Pakistan",
  "Hydra, Algeria"
]
```

##### Error (400 Bad Request)
Returns validation errors if the input is invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "input",
      "location": "query"
    }
  ]
}
```

##### Error (500 Internal Server Error)
Returns an error if there was an issue fetching the suggestions.

Example:
```json
{
  "message": "Unable to fetch suggestions"
}
```

## Ride Endpoints

### Create Ride

#### Endpoint
`POST /ride/create`

#### Description
Creates a new ride with the given details.

#### Request Body
The request body should be a JSON object containing the following fields:
- `pickup`: The pickup location (string, required)
- `destination`: The destination location (string, required)
- `vehicleType`: The type of vehicle (string, required, must be one of 'auto', 'motorcycle', 'car')

Example:
```json
{
  "pickup": "Hyderabad, Telangana, India",
  "destination": "Secunderabad, Telangana, India",
  "vehicleType": "car"
}
```

#### Response
##### Success (201 Created)
Returns the created ride details.

Example:
```json
{
  "user": "user_id",
  "pickup": "Hyderabad, Telangana, India",
  "destination": "Secunderabad, Telangana, India",
  "otp": "123456",
  "fare": 150
}
```

##### Error (400 Bad Request)
Returns validation errors if the request body is invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "Pickup is required",
      "param": "pickup",
      "location": "body"
    },
    {
      "msg": "Destination is required",
      "param": "destination",
      "location": "body"
    },
    {
      "msg": "Vehicle Type is required",
      "param": "vehicleType",
      "location": "body"
    }
  ]
}
```

##### Error (500 Internal Server Error)
Returns an error if there was an issue creating the ride.

Example:
```json
{
  "error": "Unable to create ride"
}
```

### Get Fare

#### Endpoint
`GET /ride/get-fare`

#### Description
Fetches the fare for a ride between the given pickup and destination locations.

#### Request Parameters
- `pickup`: The pickup location (string, required)
- `destination`: The destination location (string, required)

#### Response
##### Success (200 OK)
Returns the fare for the ride.

Example:
```json
{
  "auto": 100,
  "car": 150,
  "motorcycle": 80
}
```

##### Error (400 Bad Request)
Returns validation errors if the pickup or destination is invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "Pickup is required",
      "param": "pickup",
      "location": "query"
    },
    {
      "msg": "Destination is required",
      "param": "destination",
      "location": "query"
    }
  ]
}
```

##### Error (500 Internal Server Error)
Returns an error if there was an issue fetching the fare.

Example:
```json
{
  "error": "Unable to fetch fare"
}
```




