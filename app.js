const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const healthCheck = require('./routes/healthCheck')

app.use(cors());
app.use(express.json());

app.use('/health', healthCheck)
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/activities', activityRoutes);

module.exports = app;
