const express = require('express');
const cors = require('cors');

const AuthenticationRoutes = require('./routes/AuthenticationRoutes');
const UserRoutes = require('./routes/UserRoutes');
const BugRoutes = require('./routes/BugRoutes');

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.set('json spaces', 2);

app.use('/auth', AuthenticationRoutes);
app.use('/user', UserRoutes);
app.use('/bug', BugRoutes);

module.exports = app;