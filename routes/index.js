const express = require('express')
const Router = express.Router()

const allRoute = require('./mainRoute')

Router.use('/', allRoute)


module.exports = Router