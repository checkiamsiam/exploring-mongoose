const express = require('express');
const productRoute = express.Router()


productRoute.route('/products').get((req , res) => {
  res.send("here is the products")
})

module.exports = productRoute ;