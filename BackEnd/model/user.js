const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['student','recruiter'],
        required : true
    },
    profile : {
        bio : String,
        skills : [{type: String}],
        resume : String,
        resumeOrignalName : {type : String},
        company : {type : mongoose.Schema.Types.ObjectId , ref : "company"},
        profilephoto : {
            type : String,
            default : ""
        }
    }
    
}, {timestamps: true});

module.exports = mongoose.model("user" , userSchema);