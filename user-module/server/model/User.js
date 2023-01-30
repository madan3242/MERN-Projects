import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    isAdmin: { type: String, default: false },
    address: {
        flat: { type: String, required: true },
        street: { type: String, required: true },
        landmark: { type: String, required: true },
        pin: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        state: { type: String, required: true },
        mobile: { type: Number, required: true, max: 10 },
    },

    createdAt: { type: Date, default: Date.now() },
});

let User = mongoose.model("user", userSchema);

export default User;