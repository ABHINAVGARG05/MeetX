const express = require("express");
const app = express();
const healthRoute = require('./routes/healthCheck')

app.use(express.json());
app.use('/health',healthRoute)

module.exports = app;
