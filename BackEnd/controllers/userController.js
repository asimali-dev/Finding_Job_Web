const user_model = require('../model/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const getdatauri = require('../utils/datauri');
const cloudinary = require("../utils/cloudinary");
const register = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);
        let { fullname, email, password, role, phonenumber, city, country } = req.body;
        if (!fullname || !email || !password || !role || !phonenumber || !city || !country) {
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
        let newUser = await user_model.create({
            fullname,
            email,
            password: hash,
            phonenumber,
            role,
            city,
            country
        });
        newUser = {
            _id: newUser.id,
            fullname: newUser.fullname,
            email: newUser.email,
            phonenumber: newUser.phonenumber,
            role: newUser.role,
            profile: newUser.profile,
            city: newUser.city,
            country: newUser.country,
        };

        // JWT generate
        const token = jwt.sign({ userid: newUser._id },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );
        return res
            .status(201)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "none"
            })
            .json({
                message: "User registered successfully",
                success: true,
                user: newUser
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
        return res.status(200).cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none' }).json({
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
        console.log("===== UPDATE PROFILE =====");
console.log("BODY:", req.body);
console.log("FILES:", req.files);
    
        const profilephoto = req.files?.profilephoto?.[0];
        const resume = req.files?.resume?.[0];

        const userid = req.id;
        const updateData = {};

        // Basic fields
        if (fullname) updateData.fullname = fullname;
        if (email) updateData.email = email;
        if (phonenumber) updateData.phonenumber = phonenumber;
        if (bio) updateData["profile.bio"] = bio;
        if (skills) updateData["profile.skills"] = skills.split(",");

        // Profile Photo Upload
        if (profilephoto) {
            const profilePhotoUri = getdatauri(profilephoto);

            const profileResponse = await cloudinary.uploader.upload(
                profilePhotoUri.content
            );

            updateData["profile.profilephoto"] = profileResponse.secure_url;
        }

        // Resume Upload
        if (resume) {
            const resumeUri = getdatauri(resume);

            const resumeResponse = await cloudinary.uploader.upload(
                resumeUri.content,
                {
                    resource_type: "raw",
                }
            );

            updateData["profile.resume"] = resumeResponse.secure_url;
            updateData["profile.resumeOrignalName"] = resume.originalname;
        }

        const user = await user_model.findByIdAndUpdate(
            userid,
            updateData,
            {
                returnDocument: "after",
            }
        );

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user,
        });
    } catch (error) {
       console.log(error);

    return res.status(500).json({
        success: false,
        message: error.message,
    });
    }
};
const getProfile = async (req, res) => {
    try {
        const userid = req.id
        const user = await user_model.findById(userid);
        if (!user) {
            return res.status(404).json({
                message: "user not find",
                success: false
            })
        }
        return res.status(200).json({
            message: "user found",
            success: true,
            user
        })


    } catch (error) {
        console.log(error)
    }

}

module.exports = { register, login, logout, updateProfile, getProfile }