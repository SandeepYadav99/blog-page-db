import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

const Signup = mongoose.model("users", signupSchema);

export default Signup;