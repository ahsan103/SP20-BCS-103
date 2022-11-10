const mongoose = require('mongoose');

const database = ()=>{
    mongoose.connect(process.env.DB).then(()=>{
        console.log("database connected")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = database