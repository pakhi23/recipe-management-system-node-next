require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // mondodb conenction import krrre h
const authRouters = require('./routes/auth.routes');


require('dotenv').config();
//mongoDB se connect hora h
connectDB(); // mongoDB connection function call

const app = express(); // express app initialization krre he
app.use(express.json());
app.use('/api/auth',authRouters);


const  PORT  = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`) // SERVER START MESSAGE
})
