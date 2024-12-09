require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); // Use body parser to parse incoming data
const connectDB = require('./config/db'); // MongoDB connection import
const authRouters = require('./routes/auth.routes');
const dishRoutes = require('./routes/dishRoutes');
const cors = require('cors'); // Importing CORS package

// MongoDB se connect hora h
connectDB(); // MongoDB connection function call

const app = express(); // Express app initialization
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded data

// Middleware for serving static files
app.use('/public', express.static('public'));


// CORS configuration to allow requests from your frontend (http://localhost:3001)
app.use(cors({
    origin: 'http://localhost:3001', // Allow your frontend to access the backend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the necessary HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow necessary headers
}));




app.use('/api/auth', authRouters); // Route for authentication
app.use('/api/dishes', dishRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // SERVER START MESSAGE
});
