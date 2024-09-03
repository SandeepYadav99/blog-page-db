import signupSchema from "../modals/SignupUser.js";
import generatePasswordHash from "../utility/utility.js";
import bcrypt from "bcrypt"
import generateToken from "../utility/tokenUtility.js";

const Signup = async (req, res) => {
  const { name, email, password } = req.body;
  
  const hashPassword = generatePasswordHash(password);
  const existingUser = await signupSchema.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ msg: "Email already registered" });
  };

  const user = await signupSchema.create({
    name,
    email,
    password: hashPassword,
  });

  return res.status(201).json({ msg: "User created successfully", user });
};

const login = async (req, res)=>{
  const {  email, password } = req.body;
  const existingUser = await signupSchema.findOne({ email });

  if (!existingUser) {
    return res.status(400).json({ msg: "Invalid email or password" });
  };
  const isMatch = bcrypt.compareSync(password, existingUser.password)
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid email or password" });
  }
  const token = generateToken(existingUser)
  return res.status(200).json({ msg: "Login successful", existingUser , token});
}

export default { Signup, login };
