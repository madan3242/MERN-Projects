//configure dotenv
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRouter from "./routes/productRouter.js";
import bodyParser from "body-parser";

const app = express();

//configure cors
app.use(cors());

//configure morgan
app.use(morgan('dev'));

//configure express to recive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', productRouter);

app.get('/', (req, res) => {
    res.send('<h1>Product CRUD Example</h1>')
})

export default app;