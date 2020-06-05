const express = require('express')
const router = express.Router()

const cartControllers = require('../controllers/cart.controller')

router.get('/add/:bookId', cartControllers.addToCart)

module.exports = router