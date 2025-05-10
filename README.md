
# 🧾 Basic Activity Booking API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to register, log in, view activities, and book them. Includes JWT-based authentication.


## 📦 Installation

### 1. Clone the repo:

```bash
git clone https://github.com/ABHINAVGARG05/MeetX
cd MeetX
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up environment variables in `.env`:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the server:

```bash
npm start
```

---

# 📬 API Endpoints

## Get ``` /health```
#### **Response Body**
```json
{
    "success": true,
    "status": 200,
    "message": "Health check passed",
    "data": {
        "server": "Up",
        "mongoDB": "Connected"
    }
}
```
---
## Register User
#### POST ```/api/v1/auth/register```
#### **Request Body**
```json
{
    "name":"Abhinav Garg",
    "phone":<phone_number>,
    "email":<email>,
    "password":<password>
}
```
#### **Response Body**
```json
{
    "success": true,
    "status": 201,
    "message": "User Created Successfully",
    "data": {
        "name": "Abhinav",
        "email": <email>,
        "phone": <phone_number>,
        "password": "$2b$10$ksFn.bOyEyQ7jGXhAy1.OuLdz5iHJiXTVOz3rAr40sPQkHJX4fXby",
        "_id": "681ee4463c7702b754b1cf8c",
        "createdAt": "2025-05-10T05:29:42.240Z",
        "updatedAt": "2025-05-10T05:29:42.240Z",
        "__v": 0
    }
}
```
-----
### User Login ```/api/v1/auth/login```
#### **Request Body**
```json
{
    "email":<email>,
    "password":<password>
}
```
#### **Response Body**
```json
{
    "success": true,
    "status": 200,
    "message": "User Fetched Successfully",
    "data": {
        "_id": "681e581870e339e54a76bafe",
        "name": "Abhinav Garg",
        "email": <email>,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU1ODE4NzBlMzM5ZTU0YTc2YmFmZSIsImlhdCI6MTc0Njg0NjkxMCwiZXhwIjoxNzQ3NDUxNzEwfQ.yurk5Bbbe_NUdYQriEgAfXcgD7luBppOoyyfndH2mqs"
    }
}
```
---
### Get Activities  ``` /api/v1/activities/```
#### **Response Body**
```json
{
    "success": true,
    "status": 200,
    "message": "Request was successful",
    "data": [
        {
            "_id": "681ebea371637238654642db",
            "id": 189956,
            "title": "Cricket Match",
            "description": "Friendly cricket match at the local ground.",
            "location": "Community Sports Ground",
            "dateTime": "2025-05-12T10:00:00.000Z"
        },
        {
            "_id": "681ebea371637238654642dc",
            "id": 290784,
            "title": "Movie Night",
            "description": "Screening of Interstellar at PVR.",
            "location": "PVR Cinemas, Mall Road",
            "dateTime": "2025-05-13T18:00:00.000Z"
        }
    ]
}
```
---
### POST Book Activity ```/api/v1/activities/book/:id```
#### **Response Body**
```json
{
    "success": true,
    "status": 201,
    "message": "Activity Booked Successfully",
    "data": {
        "bookingId": "681eedc82580de9396f3139c"
    }
}
```
---
### GET Booked Activity
#### **Response Body**
```json
{
    "success": true,
    "status": 201,
    "message": "Booking Fetched Scuccessfully",
    "data": [
        {
            "_id": "681eedc82580de9396f3139c",
            "user": "681e581870e339e54a76bafe",
            "activity": {
                "_id": "681ebea371637238654642dc",
                "id": 290784,
                "title": "Movie Night",
                "description": "Screening of Interstellar at PVR.",
                "location": "PVR Cinemas, Mall Road",
                "dateTime": "2025-05-13T18:00:00.000Z"
            },
            "bookedAt": "2025-05-10T06:10:16.661Z",
            "__v": 0
        }
    ]
}
```

##  Postman Collection

 A Postman Collection is available for API testing. You can import it to test endpoints.  
(Provide a link here if hosted or export from Postman and share with team/reviewer)

---

##  Deployment

- [Vercel](https://meet-x-lovat.vercel.app/)

Make sure to add all `.env` variables on the deployment dashboard.

---

## Data Flow Diagram


![DFD Level 1](https://res.cloudinary.com/abhi-server/image/upload/v1746854172/diagram-export-5-10-2025-10_44_47-AM_rpy3yc.png)


---


