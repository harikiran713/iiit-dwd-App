const express = require("express");
const app = express();
const cors=require('cors')
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes.js");
const lostandfound = require("./routes/lostandfound.js");
const awsUpload=require("./routes/upload")
const clubRouter = require("./routes/clubs.routes.js")
const eventRouter = require("./routes/events.routes.js")

require('dotenv').config();
app.use(cors());

async function connect() {
    return await mongoose.connect(process.env.DB_URL);
}

connect().then(() => {
    console.log("Connected to the database");
});

app.use(express.json());





app.use("/api/auth", authRouter);
app.use("/api/lostandfound", lostandfound);
app.use("/api/aws",awsUpload);
<<<<<<< HEAD
app.use("/api/items",itemsRouter)

=======
app.use("/api/clubs" , clubRouter);
app.use("api/events" , eventRouter);
>>>>>>> ca127c1 (Events and Clubs features)

app.use((err, req, res, next) => {
    const statuscode = err.statusCode || 500;
    const message = err.message || "Some error occurred";
    res.status(statuscode).json({ message, statuscode });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
