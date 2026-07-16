const user_model = require('../model/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
    try {
        let { fullname, email, password, role, phonenumber } = req.body;
        if (!fullname || !email || !password || !role || !phonenumber) {
            return res.status(400).json(
                {
                    message: "something is missing",
                    success: false
                }

            )
        };
        const user = await user_model.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        await user_model.create({
            fullname,
            email,
            password: hash,
            phonenumber,
            role
        });
        return res.status(200).json({
            message: "User registered successfully",
            success: true
        });
    } catch (error) {
        console.log(error)
    }

};

const login = async (req, res) => {
    try {
        let { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json(
                {
                    message: "something is missing",
                    success: false
                }

            )
        };
        let user = await user_model.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false
            });
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false
            });
        };
        if (role != user.role) {
            return res.status(400).json({
                message: "Account doesn't exsit with current role",
                success: false
            });
        };
        user = {
            _id: user.id,
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile
        }
        const token = await jwt.sign({ userid: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
        return res.status(200).cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: `wellcome back ${user.fullname}`,
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
    }

}
const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logout successfully",
            success: true
        });

    } catch (error) {
        console.log(error)
    }
}
const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phonenumber, bio, skills } = req.body;
        const file = req.file
        if (!fullname || !email || !skills || !phonenumber || !bio) {
            return res.status(400).json(
                {
                    message: "something is missing",
                    success: false
                }

            )
        };
        const skillsArray = skills.split(",");
        const userid = req.id; // middleware authentication
        let user = await user_model.findById(userid);
        if (!user) {
            return res.status(400).json({
                message: "user not found",
                success: false
            })
        }
        user.fullname = fullname,
            user.email = email,
            user.phonenumber = phonenumber,
            user.profile.bio = bio,
            user.profile.skills = skillsArray

        await user.save();
        user = {
            _id: user.id,
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile
        }
        return res.status(200).json({
            message: "profile updated successfully",
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { register, login, logout, updateProfile }