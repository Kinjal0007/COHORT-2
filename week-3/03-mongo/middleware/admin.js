const{Admin}=require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const{username,password}=req.headers;
    if(!username||!password) {
        return res.status(404).send({message:"Invalid username of password"});
    }
    const Admin=await Admin.findOne({
        username: username,
        password: password
    });
    if(!Admin){
        return res.status(400).send({message: "Admin not found"});
    }
    else{
        req.admin = Admin;
        next();
    }
}

module.exports = adminMiddleware;