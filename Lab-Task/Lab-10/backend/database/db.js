const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
const connectDatabase =()=>{
    mongoose.connect(process.env.DB ).then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDatabase