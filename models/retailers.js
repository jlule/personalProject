const mongoose = require('mongoose');

const storesSchema = mongoose.Schema(
    {
        managersName:{
            type:String,
            required: [true, "Please enter Managers name"]
        },
        
        storeName:{
            type:String,
            required: [true, "Please enter storeName"]
        },
        storeAddress:{
            type:String,
            required: [true, "Please enter storeAddress"]
        },
        phone_number:{
            type:String,
            required: [true, "Enter a valid phone_number"]
        },
        State:{
            type:String,
            required: [true, "Please enter streetAddress"]
        },
        county:{
            type:String,
            required: [true, "Please enter a county"]
        },
        EIN:{
            type:Number,
            required: [true, "Enter a Valid EIN"]
        }
    }
)


const Stores = mongoose.model('Store', storesSchema)

module.exports = Stores;