# My Website Backend

This project is a backend application for a website that includes user authentication and a contact form. It is built using Node.js, Express, and MongoDB with Mongoose.

## Features

- User signup and login functionality
- JWT-based authentication
- Contact form submission handling
- MongoDB database integration

## Technologies Used

- Node.js
- Express
- Mongoose
- MongoDB
- JSON Web Tokens (JWT)

## Project Structure

```
my-website-backend
├── src
│   ├── config
│   │   └── db.js               # MongoDB connection logic
│   ├── controllers
│   │   ├── authController.js    # User authentication logic
│   │   └── contactController.js  # Contact form submission logic
│   ├── models
│   │   ├── User.js              # User model
│   │   └── Contact.js           # Contact model
│   ├── routes
│   │   ├── auth.js              # Authentication routes
│   │   └── contact.js           # Contact routes
│   ├── middleware
│   │   └── authMiddleware.js     # Authentication middleware
│   └── app.js                   # Entry point of the application
├── package.json                  # NPM configuration file
└── README.md                     # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-website-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database. Update the connection string in `src/config/db.js` if necessary.

4. Start the application:
   ```
   npm start
   ```

## Usage

- **Signup**: Send a POST request to `/api/auth/signup` with user details (username, email, password).
- **Login**: Send a POST request to `/api/auth/login` with credentials (email, password).
- **Contact Form**: Send a POST request to `/api/contact` with contact details (name, email, message).

## License

This project is licensed under the MIT License.