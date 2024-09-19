import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: Number, required: true},
    inquiry: {type: String, required: true},
    message: {type: String, required: false},
    date: { type: Date, default: Date.now },
   
});

const messageModel = mongoose.models.message || mongoose.model("message", messageSchema);

export default messageModel;