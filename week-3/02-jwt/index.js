const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z=require("zod");

function signJwt(username, password) {
    const emailschema=z.string().email();
    const passwordschema=z.string().min(6);
    const ParseEmail=emailschema.safeParse(username);
    const ParsePassword=passwordschema.safeParse(password);
    if(ParseEmail.success!=false && ParsePassword.success !=false){
        return jwt.sign({username},jwtPassword);
    }
    else{return null;}
}

function verifyJwt(token) {
    try {
        validtoken=jwt.verify(token,jwtPassword);
        return true;
    }catch(error){return false;}
}

function decodeJwt(token) {
    const isvalid=jwt.decode(token);
    return isvalid ?true:false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
