const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//<===========================================>
//<=============== SignUp Handler ============>
//<===========================================>

const signup = async(req, res) => {
    
    //Fetch Data from request body
    const {username, email, password} = req.body;
    
    try{

        //Check if user is already logged in.
        let user = await User.findOne({ username })
        //Validation
        if(user){
            return res.status(400).json({
                success:false,
                message:"Please Login",
            })
        }

        //Password hashed by bcrypt
        const securePassword = await bcrypt.hash(password, 10);
        // User Entry create & save 
        user = await User.create({ username, email, password: securePassword });
        await user.save();
        //return reponse
        return res.status(200).json({
            success:true,
            message:"USer Created Successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Error.message"
        })
    }
}


//<===========================================>
//<================ Login Handler ============>
//<===========================================>


const login = async(req, res) => {

    
    const { username, password } = req.body;
    
    try{
        let user = await User.findOne({ username });
        if(!user){
            return res.status(400).json({
                success:false,
                message:"This Account not Verified"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch) {
            return res.status(400).json({
                success:false,
                message:"Invalid Password"
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure:true
        })

        return res.status(200).json({
            success:true,
            message:"Login Successfully"
        })


    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"User not login while occured error"
        })
    }
}



//<===========================================>
//<============ CheckAuth Handler ============>
//<===========================================>


    const checkAuth = async (req, res) => {
        //Fetch Id
        const id = req.id;
        try{
            //Find User by findById method
            const user = await User.findById(id).select("-password");
            //Validation
            if(!user){
                return res.status(400).json({
                    success:false,
                    message:"Access Denied"
                });
            }
            //Return response
            return res.status(200).json({
                success:true,
                message:"User Fetched", 
                user
            })

        }catch(error){
            return res.status(500).json({
                success: false,
                message:"Error.message", 
            })
        }
    }



module.exports = { signup, login, checkAuth};










