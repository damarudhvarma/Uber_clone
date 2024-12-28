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
### Success (201 Created)
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
### Error (400 Bad Request)
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




