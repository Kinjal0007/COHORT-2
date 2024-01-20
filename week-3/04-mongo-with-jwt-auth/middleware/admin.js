const jwt = require("jsonwebtoken");
const{Admin}=require("../db");

async function adminMiddleware(req, res, next) {
    const token=req?.headers?.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).send({message: "Invalid Token"});
    }
    try{
        jwt.verify(token,process.env.JWT_PASSWORD,(err,data)=>{
            if(err){
                return res.status(401).send({message:"Unathorized!"});
            }
            req._id=data._id;
            next();
        });
    }catch(error){
        res.status(401)
        .send({message:"Invalid token entered"});
    }
}

module.exports = adminMiddleware;