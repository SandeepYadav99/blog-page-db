import express from "express";
import SignupUser from "../controllers/SignupUser.js";

let router = express.Router();

router.post("/signup", SignupUser.Signup)
router.post("/login", SignupUser.login)

export default router;
