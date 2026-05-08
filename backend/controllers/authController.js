const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.register = async (req, res) => {
    try {
        const { name, email, password, address } = req.body;

        // CHECK EXISTING USER
        const existingUser = await User.findOne({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE USER
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            address,
            role: "USER",
        });

        res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.json({
            token,
            role: user.role,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
        });
    }
};