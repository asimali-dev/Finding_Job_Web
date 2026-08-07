const express = require('express');
const router = express.Router();
const { upload } = require("../middlewares/multer");

const {registerCompany, get_companyById, updateCompany, get_companies, getAllCompanies} = require("../controllers/companyController")
const {isAuthenticated} = require('../middlewares/isAuthenticated');

router.post("/register",isAuthenticated, upload.single("logo"),registerCompany);
router.get("/get" ,isAuthenticated, get_companies);
router.get("/get/:id",isAuthenticated, get_companyById);
router.put("/update/:id",isAuthenticated,upload.single("logo"), updateCompany);
router.get("/all", getAllCompanies);

module.exports = router;
