const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const { connectDb } = require("./connection")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

connectDb();


app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    next();
});

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));




app.use(express.json())
app.use(cookieParser());
app.use("/api", routes)

app.listen(port, () => 
    console.log(`server is running on ${port}`)
);









