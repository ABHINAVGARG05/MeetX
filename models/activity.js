const mongoose = require('mongoose')

//  id, title, description, location, date & time.

const activitySchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    
})