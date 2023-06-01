
const express = require("express")
const {restaurantModel} = require("../Model/restaurant.Model")
const {menuModel} = require("../Model/menu")
const {auth} = require("../Middleware/auth.Middleware")

const restaurantRouter = express.Router()
restaurantRouter.use(auth)

// get all restaurants
restaurantRouter.get("/api/restaurants", async (req, res) => {
    try {
        let restaurants = await restaurantModel.find()
        res.status(200).json({ restaurants })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// get restaurant by id
restaurantRouter.get("/api/restaurants/:id", async (req, res) => {
    try {
        let id = req.params.id
        let restaurant = await restaurantModel.find({ _id: id })
        res.status(200).json({ restaurant })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// add restaurant
restaurantRouter.post("/api/restaurants", async (req, res) => {
    try {
        const { name, address } = req.body
        let menu = []
        let newRestaurant = new restaurantModel({ name, address, menu })
        await newRestaurant.save()
        res.status(200).json({ message: "restaurant added successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// get restaurant by id and menu
restaurantRouter.get("/api/restaurants/:id/menu", async (req, res) => {
    try {
        let id = req.params.id
        let restaurant = await restaurantModel.find({ _id: id })
        let menu = restaurant[0].menu
        res.status(200).json({ menu })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// add menu to id of that restaurant
restaurantRouter.post("/api/restaurants/:id/menu", async (req, res) => {

    try {
        const {name, description, price, image} = req.body
        let newMenu = new  menuModel({ name, description, price, image })
        let id = req.params.id
        let restaurant = await restaurantModel.find({ _id: id })
        restaurant[0].menu.push(newMenu)
        await restaurant[0].save()
        res.status(200).json({ message: "menu added successfully" })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//  delete menu by its id 
restaurantRouter.delete("/api/restaurants/:id/menu/:menuId", async (req, res) => {
    try {
        let id = req.params.id
        let menuId = req.params.menuId
        let restaurant = await restaurantModel.find({ _id: id })
        let menu = restaurant[0].menu
        let newMenu = menu.filter((item) => item._id != menuId)
        restaurant[0].menu = newMenu
        await restaurant[0].save()

        res.status(200).json({ message: "menu deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



module.exports = { restaurantRouter }