const mongoose = require("mongoose");

const connectedDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoo connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectedDb;