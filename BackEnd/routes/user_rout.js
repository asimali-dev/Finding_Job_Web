const express = require ("express");
const router = express.Router();

const {register, login, logout, updateProfile} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/Profile/Update", isAuthenticated, updateProfile);

module.exports = router

