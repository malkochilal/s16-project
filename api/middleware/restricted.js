const {JWT_SECRET}=require("../../config/secrets");
const jwt =require("jsonwebtoken");



module.exports=(req,res,next)=>{
    let token=req.headers["authorization"];
    if(token){ //token var ama geçerli değil
        jwt.verify(token,JWT_SECRET,(err,decodedJWT)=>{
            if(err){
                res.status(401).json({message:"Token exists but it is invalid"})
            }else{ //token var ve geçerli userInfo optional
                req.userInfo=decodedJWT; //tokenPayload
                next();

            }
        });
    }else{
        res.status(401).json({message:"Token required"})
    }
};



//Auth middleware'i buraya taşıdım


    //     const token = req.headers.authorization;
    
    //     if (token) { //token var
    //         jwt.verify(token, JWT_SECRET, (err, tokenPayload) => {
    //             if (err) { //token var ama geçerli değil
    //                 next({ status: 401, message: "Token not valid" })
    
    
    //             } else { //token var ve geçerli userInfo aslında optional
    //                 req.userInfo = tokenPayload;
    //                 next();
    
    //             }
    //         })
    
    //     } else { //token yoksa
    //         next({ status: 401, message: "Token not found" })
    //     }
    
    // }
    
    // const protected = (req, res, next) => {
    //     next()
    // }
    