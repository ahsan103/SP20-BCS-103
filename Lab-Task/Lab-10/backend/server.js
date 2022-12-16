const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./database/db');

dotenv.config({path:'backend/config/config.env'})

connectDatabase()

app.listen(process.env.PORT , ()=>{
    console.log(`Server is working at ----> http://localhost:${process.env.PORT}`)
})