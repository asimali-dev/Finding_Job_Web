const mongoose = require("mongoose");
const user = require("./user");

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    requirements : [{
        type : String,
    }],
    salary : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    jobtype : {
        type : String,
        required : true
    },
    position : {
        type : Number,
        required : true
    },
    company : {
        type : mongoose.Schema.Types.ObjectId , ref : 'company'
    },
    created_by : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'user',
        required : true

    },
    applications : [{
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'applicants',

    }]
}, {timestamps: true});

module.exports = mongoose.model("job" , jobSchema);
