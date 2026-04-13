# Authentication Integration Setup Guide

This guide will help you set up the authentication system that integrates the frontend with the backend.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn package manager

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd my-website-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure MongoDB is running on your system:
   - For local MongoDB: `mongod`
   - For MongoDB Atlas: Update the connection string in `src/config/db.js`

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will be running on `http://localhost:5000`

### (Optional) Email Notifications for Contact Form

To enable admin email notifications when someone submits the contact form, set these environment variables in `my-website-backend/.env`:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
ADMIN_EMAIL=admin@example.com
FROM_EMAIL=no-reply@example.com
```

Notes:
- Use port `465` for secure/SSL SMTP and `587` for STARTTLS.
- If these vars are not set, the submission will still save to MongoDB but no email will be sent.

## Frontend Setup

1. Navigate to the root directory (where package.json is located)

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:3000`

## Features Implemented

### Authentication System
- **Login/Signup Modal**: Beautiful modal with form validation
- **User Context**: Global state management for user authentication
- **Protected Routes**: Ready for implementation
- **Token Management**: Automatic token storage and management

### UI Components
- **Navigation Bar**: Updated with login/signup buttons
- **Mobile Responsive**: Authentication works on all devices
- **Form Validation**: Client-side validation with error messages
- **Loading States**: Proper loading indicators during API calls

### Backend Integration
- **RESTful API**: Clean API endpoints for authentication
- **Password Hashing**: Secure password storage with bcrypt
- **JWT Tokens**: Secure token-based authentication
- **CORS Enabled**: Proper cross-origin resource sharing

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Login user

### Contact
- `POST /api/contact` - Submit contact form

## Usage

1. **Sign Up**: Click "Sign Up" button in navigation
2. **Login**: Click "Login" button in navigation
3. **Logout**: Click "Logout" button when logged in
4. **Mobile**: Authentication buttons are available in mobile menu

## File Structure

```
├── contexts/
│   └── AuthContext.tsx          # Authentication context
├── services/
│   └── api.ts                   # API service functions
├── components/
│   ├── AuthModal.tsx            # Login/Signup modal
│   └── Navigation.tsx           # Updated navigation
├── my-website-backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   └── auth.js
│   │   └── app.js
└── app/
    └── layout.tsx               # Updated with AuthProvider
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure the backend is running and CORS is properly configured
2. **API Connection**: Check that `NEXT_PUBLIC_API_URL` is correctly set
3. **MongoDB Connection**: Ensure MongoDB is running and accessible
4. **Token Issues**: Clear localStorage if experiencing authentication problems

### Development Tips

- Use browser dev tools to monitor network requests
- Check console for any error messages
- Verify API endpoints are responding correctly
- Test both login and signup flows

## Next Steps

- Add password reset functionality
- Implement protected routes
- Add user profile management
- Enhance error handling
- Add email verification
