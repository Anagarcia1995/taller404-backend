import Admin from "../model/AdminModel.js";
import jwt from "jsonwebtoken";

//generamos un token jwt
const generateToken = (adminId) => {
    return jwt.sign({ id: adminId}, process.env.JWT_SECRET, {
        expiresIn:"1d"
    });
};

export const registerAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json ({ error: "All fields are required"});
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ error: "Admin alredy exists"});
        }

        const admin = new Admin ({ username, email, password });
        await admin.save();

        res.status(201).json({
            message: "Admin registered sucesfully",
            admin: { id: admin._id, username: admin.username, email: admin.email},
        });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required"})
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ error: "Admin not found"});
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials"});
        }

        const token = generateToken(admin._id);

        res.json({
            message: "Login succesful",
            token,
            admin: { id: admin._id, username: admin.username, email: admin.email},
        });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};