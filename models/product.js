const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
            
        },
        brandname: {
            type: String,
            required: [true, "Please enter a brand"]
        },
        quantity_units: {
            type: Number,
            required: true,
            default: 0
        },
        weight_oz: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        storename: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        state: {
            type: String,
            required: false,
        }

    },
    {
        timestamps: true
    }
)


const Products = mongoose.model('Product', productSchema)

module.exports = Products;