import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin"],
        default: "admin",
    },
});

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
