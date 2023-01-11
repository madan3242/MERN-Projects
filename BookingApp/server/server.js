import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js"
import usersRouter from "./routes/users.js"
import hotelsRouter from "./routes/hotels.js"
import roomsRouter from "./routes/rooms.js"

dotenv.config();
const app = express();

const connect = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGODB_URL);
        console.log("MONGODB CONNECTED");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MONGODB DISCONNECTED");
})

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/hotels", hotelsRouter);
app.use("/api/v1/rooms", roomsRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went worng";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(4000, () => {
    connect();
    console.log("SERVER CONNECTED");
})