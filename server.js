const express = require('express');
const connect = require('./connect');
const routes = require('./routes/routes');
const Products = require('./models/product');
const app = express();

app.use(express.json());


// app.use((req, res, next) =>{
//     const err = new Error("Not Found")
//     err.status = 404
//     next(err)
// });

// app.use((req,res,next) => {
//     res.status(err.status || 500);
//     res.send({
//         error:{
//             status: err.status || 500,
//             message: err.message
//         }
//     });
// });


// access all routes
app.use('/', routes);

app.listen(3000, ()=>{
    console.log('Node API is running on port 3000')
    
})

// connect to database

connect
