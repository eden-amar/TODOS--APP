
const express = require("express");
const cors = require('cors');
const connect = require('./server/models/db.js');

const router = require('./server/routes');

// const todosRouter = require('./server/routes/todos-router');
// const userRouter = require('./server/routes/authentication')

const app = express(); // express application

connect();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(router);
// app.use(todosRouter);
// app.use(userRouter);

app.listen( 3000,() => {console.log('application is running')})






