const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/owner", require("./routes/ownerRoutes"));

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database connected successfully");

        app.listen(process.env.PORT || 5000, () => {
            console.log(
                `Server running on port ${process.env.PORT || 5000}`
            );
        });
    })
    .catch((error) => {
        console.log("Database connection failed");

        console.log(error);
    });
