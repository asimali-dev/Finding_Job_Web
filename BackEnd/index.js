const express = require("express");
const app = express();
const connectdb = require("./config/db");
const user = require("./model/user");
const job = require("./model/job");
const company = require("./model/company");
const application = require("./model/application");
const cookieparser = require("cookie-parser");
require("dotenv").config();
app.use(cookieparser())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/home", (req, res)=>{
    res.status(200).json({
        message: "done"
    })
})
//routes
const userRoutes = require("./routes/user_rout")
app.use('/api', userRoutes)

connectdb();

app.listen(3000);