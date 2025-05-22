const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URL } = process.env;

// Criar a conexão com o MongoDB
mongoose
    .connect(`${MONGO_URL}`) // Solicita conexão
    .then(() => {
        console.log("Conectado ao MongoDB")
    }) // deu certo
    .catch((err) => {
        console.log("Falha ao conectar com o MongoDB");
        console.log(err);
    }); //deu caca


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
