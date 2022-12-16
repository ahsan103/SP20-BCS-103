import mongoose, { mongo } from "mongoose";

// setup schema

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    picturePath:{
        type:String,
        default:''
    },
    friends:{
        type:Array,
        default:[]
    },
    location:{
        type:String,
    },
    occupation:{
        type:String
    },
    viewedProfile:{
        type:Number,
        default:0
    },
    impression:{
        type:Number,
        default:0
    },
},
    {timestamps:true}
)

// creating model
const User = mongoose.model('User',userSchema)
export default User