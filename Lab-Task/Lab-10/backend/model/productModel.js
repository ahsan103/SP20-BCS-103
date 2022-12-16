const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    img:{
        type:String
    },
    title:{
        type:String
    },
    price:{
        type:Number
    }
})
module.exports = mongoose.model('Product' , productSchema)