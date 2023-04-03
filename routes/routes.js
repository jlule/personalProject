const express = require('express');
const Products = require('../models/product');
const Stores = require('../models/retailers');
const routes = express.Router();


// get  all data from products database
routes.get('/products',  async(req, res) =>{ 
    try {
        const product = await Products.find({});
        res.status(200).json(product)
        console.log(product);
        
        }catch (error) {
            res.status(500).json({message:error.message})
    }

})

// GET single item //
routes.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// POST route for saving data into database
routes.post('/products', async(req, res) => {
    try {
          const product = await Products.create(req.body)
          res.status(200).json(product)
    } catch(error) {
        // console.log(req.body);
        res.status(500).json({message:error.message})
    } 
})

//PUT update route
routes.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Products.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// DELETE delete route
routes.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



// Store Routes

// get  all data from products database
routes.get('/stores',  async(req, res) =>{ 
    try {
        const stores = await Stores.find({});
        res.status(200).json(stores)
        // console.log(stores);
        
        }catch (error) {
            res.status(500).json({message:error.message})
    }

})


// GET single item //
routes.get('/stores/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const stores = await Stores.findById(id);
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// POST route for saving data into database
routes.post('/stores', async(req, res) => {
    try {
          const stores = await Stores.create(req.body)
          res.status(200).json(stores)
    } catch(error) {
        console.log(req.body);
        res.status(500).json({message:error.message})
    } 
})


//PUT update route
routes.put('/stores/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const stores = await Stores.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!stores){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedstores = await Stores.findById(id);
        res.status(200).json(updatedstores);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// DELETE delete route
routes.delete('/stores/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const stores = await Stores.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(stores);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = routes;

