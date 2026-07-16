const mongoose = require("mongoose");

const connectedDb = async ()=>{
    try {
       await  mongoose.connect(`mongodb://127.0.0.1:27017/nexhire`)
        console.log("mongoo connected")
    } catch (error) {
        console.log(error);
    };
}

module.exports = connectedDb;