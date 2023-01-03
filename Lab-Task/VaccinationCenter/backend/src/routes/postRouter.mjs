import express from "express";
import { createPost, getFeedPost, getUserPost, likePost } from "../controllers/postController.mjs";
import { verifyToken } from "../middleware/auth.mjs";
import upload from "../storage/fileStorage.mjs";

const postRouter = express.Router()

postRouter.route('/').get(verifyToken , getFeedPost)
postRouter.route('/:userId/post').get(verifyToken , getUserPost)
postRouter.route('/:id/like').patch(verifyToken,likePost)
postRouter.route('/create').post(verifyToken , upload.single('picture') , createPost)

export default postRouter