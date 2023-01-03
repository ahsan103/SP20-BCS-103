import app from "./app.mjs";
import dotenv from'dotenv';
import mongoose from "mongoose";
import User from "./src/models/userModel.mjs";
import { posts, users } from "./src/data/data.mjs";
import Post from "./src/models/postModel.mjs";

//config with dotenv

dotenv.config({path:'backend/src/config/config.env'})
const PORT = process.env.PORT 
const DB_URL = process.env.DB_URL


// connecting with database and starting server
mongoose.set('strictQuery', false)
mongoose.connect(DB_URL).then(()=>{
    app.listen(PORT, () => {
        //starting server
        console.log(`Server:http://localhost:${PORT}`)
        // User.insertMany(users)
        // Post.insertMany(posts)
    })
}).catch((err)=>{
    console.log(err)
})


