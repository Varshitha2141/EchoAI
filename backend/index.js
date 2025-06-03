const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('MongoDB connected'));

app.use('/auth', require('./routes/auth'));
app.use('/chat', require('./routes/chat'));

app.listen(5000, () => console.log('Server started on port 5000'));