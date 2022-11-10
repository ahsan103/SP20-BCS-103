const mongoose = require('mongoose');

const DB = ()=>{
    mongoose.connect(process.env.DB).then(()=>{
        console.log(`connected to DB ${process.env.DB}`)
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports = DB