const express = require('express');
const router = express.Router();

const {registerCompany, get_companyById, updateCompany, get_companies} = require("../controllers/companyController")
const {isAuthenticated} = require('../middlewares/isAuthenticated');

router.post("/register",isAuthenticated, registerCompany);
router.get("/get" ,isAuthenticated, get_companies);
router.get("/get/:id",isAuthenticated, get_companyById);
router.put("/update/:id",isAuthenticated, updateCompany);

module.exports = router;
