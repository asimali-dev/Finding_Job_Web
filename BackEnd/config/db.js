const mongoose = require("mongoose");

const connectedDb = async () => {
    try {
           await  mongoose.connect(`mongodb://127.0.0.1:27017/nexhire`)
        // await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoo connected")
        // let isConnected = false;

        // const connectdb = async () => {
        //     if (isConnected) return;
        //     await mongoose.connect(process.env.MONGO_URI);
        //     isConnected = true;
        //     console.log("mongoo connected");
        // };
    } catch (error) {
        console.log(error);
    };
}

module.exports = connectedDb;