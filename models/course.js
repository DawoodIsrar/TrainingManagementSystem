const mongoose = require('mongoose');
const {Schema} = require('mongoose')


const courseSchema = new Schema({
    title:{
        type:String,
        trim: true,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        trim: true,
        required:true,
    },

    paid:{
        type:String,
        required:true,
       
    },
    category:{
        type:String,
        required:true,
        
    }
    
},
{timestamps:true}
)

module.exports=  mongoose.model('Courses',courseSchema);