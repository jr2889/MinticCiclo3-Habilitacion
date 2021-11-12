const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('./database/connection');

const productsRouter = require('./routes/productsRouter');
const ventaRouter = require('./routes/ventaRouter');
const usersRouter = require('./routes/userRouter');
const jwt = require ('jsonwebtoken');
const authRouter= require ('./routes/AuthRoutes');
 


app.use('/productos', productsRouter);
app.use('/ventas', ventaRouter);
app.use('/auth',authRouter);
app.use('/usuario', usersRouter);
 
/*** Iniciar el servidor */
app.listen(5000, () => {
  console.log('Servidor arriba!');
});