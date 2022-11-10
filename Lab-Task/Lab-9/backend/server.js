const app = require('./app')
const dotenv = require('dotenv')
const database = require('./database/connect')

dotenv.config({path:'backend/config/config.env'})

database()

const port = process.env.PORT

app.listen(port , ()=>{
    console.log(`server: http://localhost:${port}`)
})
