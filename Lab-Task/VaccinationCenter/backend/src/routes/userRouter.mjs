import express from "express";
import { addRemoveFriend, getUser, getUserFriends } from "../controllers/userController.mjs";
import { verifyToken } from "../middleware/auth.mjs";


const userRouter = express.Router()

userRouter.route('/:id').get(verifyToken , getUser)
userRouter.route('/:id/friends').get(verifyToken , getUserFriends)

userRouter.route('/:id/:friendId').patch(verifyToken , addRemoveFriend)

export default userRouter