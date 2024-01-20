const jwt=require("jsonwebtoken");
const{user}=require("../db");

async function userMiddleware(req, res, next) {
    const token=req?.headers?.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).send({message: "Invalid token"});
    }
    try {
        jwt.verify(token.process.env.JWT_PASSWORD,(err,data)=>{
            if(err){
                return res.status(401).send({message:"Unathorized"});
            }
        });
        req._id=data._id;
        next();
    } catch (error) {
        return res.status(404).send({message:"Error in verifying token",error:error});
    }
}

module.exports = userMiddleware;