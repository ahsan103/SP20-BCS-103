const app = require('./app')
const dotenv = require('dotenv')
const DB = require('./backend/config/connect')
dotenv.config({path:'backend/config/config.env'})
DB()
const port  = process.env.PORT
app.listen(port , ()=>{
    console.log(`server:- http://localhost:${port}`)
})