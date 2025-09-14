const express = require('express');
const vision = require('@google-cloud/vision');
const cors = require('cors');
require('dotenv').config();
const CameraRoutes = require('./Routes/CameraRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Initialize Vision API client with better error handling


// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


app.use('/camera', CameraRoutes);


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
