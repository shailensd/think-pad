import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


// const express = require('express');
// this syntax is for commonJS type
dotenv.config();

const app = express(); // the express app/application instance
const PORT = process.env.PORT || 5001;

app.use(cors(
    { origin: 'http://localhost:5173' }
)); // to allow cross-origin requests
// middleware to handle JSON requests
app.use(express.json()); // to parse JSON request bodies
// Endpoint = URL + http method which is GET http://localhost:5001/api/notes - this is what client calls 

// // A simple middleware to log request method and URL
// app.use((req, res, next) => {
//     console.log(`The request method is ${req.method} and the URL is ${req.url}`);
//     next();
// })
app.use(rateLimiter); // Apply rate limiting middleware globally

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server started on PORT:', PORT);
    });
});

