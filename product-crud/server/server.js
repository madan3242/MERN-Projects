import app from "./app.js";
import { connectDb } from "./config/database.js";

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    connectDb();
    console.log(`SERVER RUNNING http://${process.env.HOSTNAME}:${process.env.PORT}`);
})