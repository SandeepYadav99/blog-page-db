
import express from "express";
import userCTX from "./users.js"
import postCtx from "./Person.js"

const router = express.Router();

router.use("/user", userCTX);
router.use("/news", postCtx);

export default router