// Modules
const express = require('express');
const dotenv = require('dotenv');

// Import Router
const { authRouter } = require('../src/app');

// Env 
dotenv.config();

// Express App
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded());

// Routers
app.use('/auth', authRouter);


module.exports = app;