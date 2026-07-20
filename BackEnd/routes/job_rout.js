const express = require('express');
const route = express.Router();
const {create_job, admin_job, getjob_ById, update_job, getAllJobs} = require("../controllers/jobController");
const {isAuthenticated} = require("../middlewares/isAuthenticated")

console.log("isAuthenticated:", isAuthenticated);
console.log("create_job:", create_job);

route.post("/create",isAuthenticated, create_job);
route.get("/get/admin/:id",isAuthenticated, admin_job);
route.get("/get/:id",isAuthenticated, getjob_ById);
route.put("/get/:id",isAuthenticated, update_job);
route.get("/get", getAllJobs);


module.exports = route;