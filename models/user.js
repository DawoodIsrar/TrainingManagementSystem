const mongoose = require('mongoose');
const {Schema} = require('mongoose')


const userSchema = new Schema({
    email:{
        type:String,
        trim: true,
        required:true,
        unique:true,
    },
    fname:{
        type:String,
        trim: true,
        required:true,
    },
    lname:{
        type:String,
        trim: true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:12,
    },
    repassword:{
        type:String,
        required:true,
        min:6,
        max:12,
    }
    ,
    role:{
        type:[String],
       default:["subscriber"],
       enum: ["subscriber","instructor"]
    }
},
{timestamps:true}
)

module.exports=  mongoose.model('User',userSchema);