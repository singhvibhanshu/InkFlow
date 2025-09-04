import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const app = express();

app.post("/signup", (req, res) => {
    res.json({
        userID: "123"
    })
})

app.post("/signin", (req, res) => {
    

    const userID = 1;
    jwt.sign({
        userID
    }, JWT_SECRET);
})

app.post("/room", middleware, (req, res) => {
    
    res.json({
        roomID: 123
    })
})

app.listen(3000);