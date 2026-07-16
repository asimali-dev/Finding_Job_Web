const express = require ("express");
const router = express.Router();

const {register, login, logout, updateProfile} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", register);
router.post("/updatedProfile", login);

module.exports = router

