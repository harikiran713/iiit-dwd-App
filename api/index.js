const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes.js");
const lostandfound = require("./routes/lostandfound.js");

require('dotenv').config();

async function connect() {
    return await mongoose.connect(process.env.DB_URL);
}

connect().then(() => {
    console.log("Connected to the database");
});

app.use(express.json());

app.use("/api", authRouter);
app.use("/api", lostandfound);

app.use((err, req, res, next) => {
    const statuscode = err.statusCode || 500;
    const message = err.message || "Some error occurred";
    res.status(statuscode).json({ message, statuscode });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
