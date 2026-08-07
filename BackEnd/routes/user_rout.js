const express = require("express");
const router = express.Router();

const { register, login, logout, updateProfile, getProfile } = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { upload } = require("../middlewares/multer")

router.post("/register", upload.single("file"), register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/Profile/Update", isAuthenticated, upload.fields([
    { name: "profilephoto", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]), updateProfile);
router.get("/profile", isAuthenticated, getProfile)
module.exports = router

