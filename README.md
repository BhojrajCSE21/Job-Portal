

# Job Portal

A modern job portal application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to search for job listings, apply for jobs, and manage their profiles.

## Features

- User authentication and authorization
- Job search and filtering
- Job application system
- User profile management
- Responsive design

## Tech Stack

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **State Management:** Redux
- **HTTP Client:** Axios

## Prerequisites

- Node.js (>=14.x)
- npm or yarn
- MongoDB instance

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### Setup the Backend

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:

    ```env
    MONGODB_URI=mongodb://localhost:27017/job-portal
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Setup the Frontend

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend server:

    ```bash
    npm start
    ```

## Usage

- Access the frontend at `http://localhost:3000`.
- The backend API runs on `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in a user

### Jobs

- `GET /api/jobs`: Get all jobs
- `GET /api/jobs/:id`: Get a job by ID
- `POST /api/jobs`: Create a new job (admin only)
- `PUT /api/jobs/:id`: Update a job by ID (admin only)
- `DELETE /api/jobs/:id`: Delete a job by ID (admin only)

### Users

- `GET /api/users/:id`: Get a user by ID
- `PUT /api/users/:id`: Update user profile
- `DELETE /api/users/:id`: Delete a user (admin only)

## Testing

To run tests, navigate to the `backend` or `frontend` directory and use:

```bash
npm test
```

