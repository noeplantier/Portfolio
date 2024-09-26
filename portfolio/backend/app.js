const express = require('express');
const cors = require('cors');
const { connectDB } = require('./models');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', projectRoutes);

connectDB();

module.exports = app;
