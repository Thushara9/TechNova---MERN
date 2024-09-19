import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thusharaperera145:1234@cluster0.e5ar7.mongodb.net/TechNova').then(()=>console.log("DB Connected"));
}