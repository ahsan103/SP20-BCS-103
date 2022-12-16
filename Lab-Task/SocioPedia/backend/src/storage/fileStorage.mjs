import multer from "multer"
const storage = multer.diskStorage({
    destination:function(){
        cb(null,'public/assets')
    },
    filename:function(){
        cb(null , file.originalname)
    }
})
const upload = multer({storage})
export default upload