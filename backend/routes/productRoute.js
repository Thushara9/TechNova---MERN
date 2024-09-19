import express from "express"
import { addProduct, productList, removeProduct, updateProduct, } from "../controllers/productController.js"
import multer from "multer"


const productRouter = express.Router();

//Image Storage
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

// productRouter.post("/add",upload.single("mainImage"),addProduct)

productRouter.post("/add", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail1", maxCount: 1 },
    { name: "thumbnail2", maxCount: 1 },
    { name: "thumbnail3", maxCount: 1 }
]), addProduct);

productRouter.put("/update", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail1", maxCount: 1 },
    { name: "thumbnail2", maxCount: 1 },
    { name: "thumbnail3", maxCount: 1 }
]), updateProduct);


productRouter.get("/list",productList)
productRouter.post("/remove",removeProduct)



export default productRouter;