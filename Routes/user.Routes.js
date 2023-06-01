
const express = require('express');
const { userModel } = require('../Model/user.Model');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRouter = express.Router();


// register route
userRouter.post("/api/register", async (req, res) => {
    try {
        let { name, email, password, address } = req.body
        let user = await userModel.find({ email })

        if (user.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }
        let pass = await bcrypt.hash(password, 8)
        password = pass
        const s = new userModel({ name, email, password, address })
        await s.save()
        res.status(201).json({ message: "User registered" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// login route
userRouter.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await userModel.find({ email });
        if (user.length == 0) {
            return res.status(400).json({ message: "User not found" });
        }
        let result = await bcrypt.compare(password, user[0].password);
        if (!result) {
            return res.status(400).json({ message: "Invalid password" });
        }

        let token = jwt.sign({ user_id: user[0]._id }, process.env.token_key);

        res.status(201).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// reset password
userRouter.patch("/api/user/:id/reset", async (req, res) => {
    try {
        let { newPass } = req.body
        let id = req.params.id
        let user = await userModel.find({ _id: id })
        let pass = await bcrypt.hash(newPass, 10)
        user[0].password = pass
        let s = await userModel.findByIdAndUpdate({ _id: id }, user[0])
        res.status(204).json({ message: "password updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// 

module.exports = { userRouter }