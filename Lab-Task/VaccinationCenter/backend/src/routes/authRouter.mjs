import express from 'express'
import { login, signup } from '../controllers/authController.mjs'
import upload from '../storage/fileStorage.mjs'
const authRouter = express.Router()

authRouter.route('/signup').post(upload.single('picture'),signup)
authRouter.route('/login').post(login)


export default authRouter