import express from "express";
import Posts from "../controllers/Posts.js";


const router = express.Router();
router.get("/posts", Posts.GetPerson)
router.post("/create", Posts.createPerson)
router.put("/update", Posts.UpdatePerson)
router.delete("/delete", Posts.DeletePerson)

export default router;