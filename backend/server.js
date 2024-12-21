const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const authRouter = require('./routes/authRouter');
const candidateRouter = require('./routes/candidateRouter');

require('dotenv').config();
require('./db/db');

const PORT = process.env.PORT || 8080

app.get('/ping', (req,res) => {
    res.send("PONG")
})
app.get('/pong', (req,res) => {
    res.send("PING")
})

app.use(bodyParser.json())
app.use(express.json())

app.use(cors({
    origin: process.env.CLIENT_URL,                     // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],                  
    credentials: true                                   // If you need to send cookies with the request
})); 

app.use('/auth', authRouter);
app.use('/candidate', candidateRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})