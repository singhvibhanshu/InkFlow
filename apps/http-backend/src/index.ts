import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema } from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {

    const data = CreateUserSchema.safeparse(req.body);
    if(!data.success) {
        res.json({
            message: "Invalid data"
        })
        return;
    }
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