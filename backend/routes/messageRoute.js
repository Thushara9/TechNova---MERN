import express from "express"
import { messageList, sendMessage } from "../controllers/messageController.js";


const messageRouter = express.Router()

messageRouter.post("/send_message",sendMessage)
messageRouter.get("/message_list",messageList)



export default messageRouter;