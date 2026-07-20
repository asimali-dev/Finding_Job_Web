const express = require('express');
const router = express.Router();

const {isAuthenticated} = require('../middlewares/isAuthenticated');
const {
    apply_job,
    getAppliedJobs,
    getApplicants,
    updateApplicant
} = require("../controllers/applicationControllers");

router.post("/apply/:id", isAuthenticated, apply_job);
router.get("/get/apply/:jobId", isAuthenticated, getAppliedJobs);
router.get("/get/applicants", isAuthenticated, getApplicants);
router.put("/update/:id",isAuthenticated,updateApplicant );

module.exports = router;
