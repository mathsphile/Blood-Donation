// mongodb+srv://ndas20997:12345@cluster0.xncaihi.mongodb.net/
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// db configuration
require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.get('/', (req, res) => {
    res.send('This is My Blood Donation API....!!!!');
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
