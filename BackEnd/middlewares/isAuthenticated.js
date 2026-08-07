const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next)=>{
     console.log("Cookies:", req.cookies);
    const token = req.cookies.token;
    console.log("Token:", token);

    if(!token){
       return res.status(401).json({
            message : "unautherized user",
            success: false 
        })
    }
    const decode = await jwt.verify(token , process.env.SECRET_KEY);
    if(!decode){
        return res.status(401).json({
            message : "invalid token",
            success : false
        })
    }
    req.id = decode.userid;
    console.log(req.id);
    next();

}
module.exports = {isAuthenticated}