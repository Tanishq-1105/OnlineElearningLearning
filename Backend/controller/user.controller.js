import User from "../model/user.model.js";
import Admin from "../model/admin.model.js"; // Example import for admin model
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        let createdUser;

        // Check role and save to respective database
        if (role === "admin") {
            const admin = await Admin.findOne({ email });
            if (admin) {
                return res.status(400).json({ message: "Admin already exists" });
            }
            const hashPassword = await bcryptjs.hash(password, 10);
            createdUser = new Admin({
                fullname: fullname,
                email: email,
                password: hashPassword,
                role: role,
            });
        } else {
            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "User already exists" });
            }
            const hashPassword = await bcryptjs.hash(password, 10);
            createdUser = new User({
                fullname: fullname,
                email: email,
                password: hashPassword,
                role: role,
            });
        }

        await createdUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
                role: createdUser.role,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { role, email, password } = req.body;
        let user;

        // Determine user role and query respective database
        if (role === "admin") {
            user = await Admin.findOne({ email });
        } else {
            user = await User.findOne({ email });
        }

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        let responseData = {
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
            },
        };

        // Customize response based on user role
        if (role === "admin") {
            responseData.isAdmin = true;
        } else {
            responseData.isRegularUser = true;
        }

        res.status(200).json(responseData);
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};