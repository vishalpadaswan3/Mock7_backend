const express = require('express');
const { orderModel } = require("../Model/order.Model")
const { auth } = require("../Middleware/auth.Middleware")

const orderRouter = express.Router()
orderRouter.use(auth)


// allow user to post order 

orderRouter.post("/api/orders", async (req, res) => {
    try {
        const { restaurant, items, totalPrice, deliveryAddress } = req.body
        let user = req.user.user_id
        console.log(user)

        let status = "placed"
        let newOrder = new orderModel({ user, restaurant, items, totalPrice, deliveryAddress, status })
        await newOrder.save()
        res.status(201).json({ message: "order added successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// allow user to get all orders
orderRouter.get("/api/orders", async (req, res) => {
    try {
        let orders = await orderModel.find()
        res.status(200).json({ orders })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// allow user to get order by id
orderRouter.get("/api/orders/:id", async (req, res) => {
    try {
        let id = req.params.id
        let order = await orderModel.find({ _id: id })
        res.status(200).json({ order })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



// allow user to update specific order by id by patch
orderRouter.patch("/api/orders/:id", async (req, res) => {
    try {
        let id = req.params.id
        let order = await orderModel.find({ _id: id })
        let updateOrder = await orderModel.updateOne({ _id: id }, { $set: req.body })
        res.status(204).json({ message: "order updated successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = { orderRouter }