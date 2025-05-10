const express = require("express");
const app = express();
const healthRoute = require("./routes/healthCheck");
const authRoutes = require("./routes/authRoutes")

app.use(express.json());

app.use("/health", healthRoute);
app.use('/api/v1/auth', authRoutes);

module.exports = app;
