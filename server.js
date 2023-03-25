const express = require('express');
const connect = require('./connect');
const routes = require('./routes/routes');
const Products = require('./models/product');
const app = express();

app.use(express.json());


// access all routes
app.use('/', routes);

app.listen(3000, ()=>{
    console.log('Node API is running on port 3000')
    
})

// connect to database

connect
