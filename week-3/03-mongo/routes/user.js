const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course}=require("../db");

// User Routes
router.post('/signup',async (req, res) => {
    const{username,password}=req.body;
    if(!username||!password){
        return res.status(400)
        .send({message: "All inputs are mandatory!"})
    }
    try {
        await User.create({
            username:username,
            password:password,
        })
        return res.status(200).send("User created successfully");
    } catch (error) {
        return res.status(500)
        .send({message: "Error creating user account",error:error});
    }
});

router.get('/courses',async (req, res) => {
    try {
        const allCourses= await Course.find();
        return res.status(200).send({courses:allCourses});
    } catch (error) {
        return res.status(500)
        .send({message:"Error in retreiving all the courses",error:error});
    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    const courseId=req.params.courseId;
    if(!courseId){
        return res.status(404).send({message: "Course ID is mandatory!"});
    }
    try {
        const course = await Course.findById(req.user._id);
        if(User.myCourses.includes(course._id)){
            return res
            .status(400).send({message: "You already have this course in library"});
        }
        User.myCourses.push(course);
        await User.save();
    } catch (error) {
        return res.status(500)
        .send({message: "Error in retreiving the course",error:error});
    }
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    try{
        const user=await User.findById(req.user._id).populate("myCourses");
        return res.status(200).send({purchasedCourses:user.myCourses});
    }catch(error){
        return res.status(500)
        .send({message: "Error in retreiving the course",error:error});
    }
});

module.exports = router