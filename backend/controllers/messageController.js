import e from "express";
import messageModel from "../models/messageModel.js";
import fs from 'fs';


// send Message

const sendMessage = async (req, res) => {

const message = new messageModel({

    name:req.body.name,
    email:req.body.email,
    mobile:Number(req.body.mobile),
    inquiry:req.body.inquiry,
    message:req.body.message

});

try {
    await message.save();
    res.status(201).json({success:true,message:"Message Sent Successfuly"});
    
} catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:"ERROR"});
    
    
}

}


//Display user message list for admin

const messageList = async (req,res) =>{
try {
    
const message = await messageModel.find({});
res.status(200).json({success:true,data:message})

} catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"An error occurred while fetching messages"})
    
    
}
    
}


export {sendMessage,messageList };