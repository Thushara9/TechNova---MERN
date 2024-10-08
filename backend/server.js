import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import messageRouter from "./routes/messageRoute.js"





// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB Connection
connectDB();

//api endpoints
app.use("/api/product",productRouter)
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/message",messageRouter)



//image path
app.use('/images', express.static('uploads'));



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

