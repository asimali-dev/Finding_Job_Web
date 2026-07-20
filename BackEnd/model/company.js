const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type: String,
    },
    website : {
        type: String,
    },
    location : {
        type: String,
    },
    logo : {
        type : String
    },
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model("company" , companySchema);