import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";


dotenv.config();
connectDB();


const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("JobHunt API is running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});