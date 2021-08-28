const express = require('express')
const Router = express.Router()
const loginController = require('../controller/mainController')

Router.post('/login', loginController.login)
Router.post('/addLocation', loginController.addLocation)
Router.post('/insertToResturant', loginController.resturants)
Router.get('/showCategories', loginController.allCategories)
Router.get('/selectCategory/:id', loginController.chooseCategory)
Router.get('/allItems/:id', loginController.showAllItems)

module.exports = Router