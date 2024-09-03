import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import appRoutes from "./routes/indexRoutes.js"

const app = express();

dotenv.config({path:"./config/.env"})
const port = process.env.PORT || 5000
const db_url = process.env.DB_URL
app.use(cors())
mongoose.connect(db_url).then(() => {
    console.log("APP IS CONNECTED TO DATABASE");
})
.catch(err => {
    console.error("DATABASE CONNECTION ERROR:", err);
});

app.use(express.json());
app.get("/",(req, res)=>{
    res.json({message:"Getting............... "})
})
app.use("/", appRoutes);
app.use((req, res, next) => {
    res.status(404);
    res.json({ message: "Incorrect api endpoint." });
});
app.listen(port, ()=>{
    console.log(`App is running on port ${process.env.PORT}`);
    
})
