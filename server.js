const express = require('express');
const mongoose = require('mongoose');

// api
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB Config
const db= require('./config/keys').mongoURI;

// connect to mongodb
mongoose
    .connect(db, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req,res) => res.send('Server is up and running!'));

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));