// index.js
const express = require("express");
const app = express();
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const cors = require("cors");

const connectDb = require('./Configuration/connectDb'); // Correct import path
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
connectDb();

app.use(cors());

app.listen(port, (error) => {
    if (error) {
        console.log("Server Failed");
    } else {
        console.log(`Server Started on port ${port}`);
    }
});

app.use(express.json());
app.use("/api", userRoute);
app.use("/api", productRoute);
