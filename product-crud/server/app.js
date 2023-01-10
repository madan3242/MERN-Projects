import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import productRouter from "./routes/productRoutes.js"

const app = express();

// configure cors 
app.use(cors());

//configure express to recive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use('/api', productRouter);

app.get('/', (req, res) => {
    res.send('<h1>Product CRUD Example</h1>');
})

export default app;