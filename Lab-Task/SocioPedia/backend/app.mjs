import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from "url";
import  express  from "express";
import authRouter from "./src/routes/authRouter.mjs";
import userRouter from "./src/routes/userRouter.mjs";
import postRouter from "./src/routes/postRouter.mjs";

//Configurations

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin" }))
app.use(morgan('common'))
app.use(bodyParser.json({limit:'30mb' , extended:true }))
app.use(bodyParser.urlencoded({limit:'30mb' , extended:true }))
app.use(cors())
app.use( '/assets' , express.static(path.join(__dirname , 'public/assets')));

// creating api

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/post',postRouter)



export default app