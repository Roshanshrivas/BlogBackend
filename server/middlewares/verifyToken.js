const jwt = require("jsonwebtoken");


const verifyToken = async (req, res, next) => {
    
    //Fetch Token From Cookies
    const token = req.cookies.token;
    //validation
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Invalid Token"
        })
    }

    try{
        
        //JWT Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success:false,
                    message:"Invalid Token"
                })
            } else{
                req.id = decoded.id;
                next();
            }
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error!"
        })
    }

}



module.exports = verifyToken;












