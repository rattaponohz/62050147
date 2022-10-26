const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(
    "mongodb+srv://rattaponohz:rattaponohoh@cluster0.8gec3fy.mongodb.net/?retryWrites=true&w=majority"
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter);

module.exports = app;
