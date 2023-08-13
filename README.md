# Job Seeking Application

This is a Node.js-based job seeking application with user authentication using JSON Web Tokens (JWT). The application allows users to register, login, and access different features based on their roles (admin or user).

## Features

- User Registration: Users can create accounts by providing their email and password.
- User Login: Registered users can log in using their email and password.
- JWT Authentication: The application uses JWT to authenticate and authorize users.
- Admin and User Roles: Users are categorized as either admin or user, with different permissions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/job-seeking-app.git
   cd job-seeking-app
2. Install dependencies:
   npm install

3. Set up environment variables: 
   Create a `.env` file in the root directory and add the following:
   
   JWT_SECRET=your-secret-key
   MONGODB_URI=your-mongodb-uri
   
4. Start the server:
   npm start

The server will start on http://localhost:3000.

API Endpoints
.`POST /auth/register`: User registration.
.`POST /auth/login`: User login.

Technologies Used
.Node.js
.Express.js
.MongoDB
.JSON Web Tokens (JWT)
.Bcrypt (for password hashing)

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request.

License
This project is licensed under the MIT License.
