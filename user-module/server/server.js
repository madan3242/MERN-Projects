import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
    console.log(`SERVER RUNNING ON ${PORT}`);

    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then((response) => {
        console.log(`MONGODB CONNECTED`);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1); //stops the node js process
    });
})