import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const app = express();

app.post("/signup", (req, res) => {

})

app.post("/signin", (req, res) => {
    

    const userID = 1;
    jwt.sign({
        userID
    }, JWT_SECRET);
})

app.post("/room", middleware, (req, res) => {
    
})

app.listen(3000);