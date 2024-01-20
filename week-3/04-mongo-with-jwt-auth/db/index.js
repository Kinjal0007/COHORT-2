const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect(process.env.MONGO_URL).then((data) => {
    console.log("Mongo DB has been successfully connected!");
});

const AdminSchema = new mongoose.Schema({
    username: {type:String,unique:true,require:true},
    password: {type:String,require:true},
    courses: [{type:mongoose.Schema.Types.objectId,ref:"Course"}],
});

const UserSchema = new mongoose.Schema({
    username: {type:String,require:true,unique:true},
    password: {type:String,require:true},
    balance:{type:Number,default:0},
    myCourses:[{type:mongoose.Schema.Types.objectId,ref:"Course"}],
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    image:String,
    owner:String,
    published: {type:Boolean,default:false},
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}