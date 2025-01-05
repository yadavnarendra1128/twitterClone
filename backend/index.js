require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = require("express");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());





app.listen(process.env.PORT, () =>
    connectDB(),
    console.log(`Server running on port ${process.env.PORT}`));
