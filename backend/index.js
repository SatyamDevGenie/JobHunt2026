import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js"
import jobRoutes from "./routes/job.routes.js";

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

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/jobs", jobRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});