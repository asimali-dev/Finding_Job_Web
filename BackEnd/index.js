const express = require("express");
const app = express();
const connectdb = require("./config/db");
const user = require("./model/user");
const job = require("./model/job");
const company = require("./model/company");
const application = require("./model/application");
const cookieparser = require("cookie-parser");
const cors = require("cors");


require("dotenv").config();
app.use(cookieparser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "done"
  })
})
//routes
const userRoutes = require("./routes/user_rout")
const companyRoutes = require("./routes/company_rout");
const jobRoutes = require("./routes/job_rout");
const ApplicantsRout = require("./routes/applicants_rout");
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/job', jobRoutes);
app.use('/api/v1/applicants', ApplicantsRout);

connectdb();

if (process.env.NODE_ENV !== 'production') {
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
}
module.exports = app;