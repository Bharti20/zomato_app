const express = require('express')
const Router = express.Router()
const loginController = require('../controller/mainController')

Router.post('/login', loginController.login)
Router.post('/addLocation', loginController.addLocation)
Router.get('/showCategories', loginController.allCategories)
Router.get('/selectCategory/:id', loginController.chooseCategory)
Router.get('/allItems/:id', loginController.showAllItems)
Router.post('/addItem', loginController.addToCart)
Router.get('/showTotalCost', loginController.showTotalCost)
Router.get('/placeOder', loginController.pymentMethod)


module.exports = Router