const express = require('express')
const Router = express.Router()
const loginController = require('../controller/mainController')

Router.post('/login', loginController.login)
Router.post('/addLocation', loginController.addLocation)


module.exports = Router