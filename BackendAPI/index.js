const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// HTTPS options (if you're using certificates for HTTPS)
const options = {
    key: fs.readFileSync('Keys/server.key'),
    cert: fs.readFileSync('Keys/server.cert')
};

// Starting the HTTPS server
https.createServer(options, app).listen(5000, () => {
  console.log('Server running on https://localhost:5000');
});
