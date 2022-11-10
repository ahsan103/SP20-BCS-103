const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path:'./backend/config/config.env'})

const port = process.env.PORT

const database = require('./backend/database/connect')

database()

app.listen(port, ()=>{
    console.log(`server is working at http://localhost:${port}`)
})