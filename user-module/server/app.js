import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import userRouter from "./router/userRouter.js";

//configure dotenv
dotenv.config();

const app = express();

app.use(morgan("dev"));
//configure cors with express
app.use(cors());

//configure express to accept from data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//router configuration
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "Welcome"
    })
})

export default app;