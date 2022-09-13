const express = require("express");
const { postProductController: postProduct, getProductController: getProduct, updateProductController, deleteProductController } = require("../controllers/product.controller");
const productRoute = express.Router();

productRoute.route("/products").get(getProduct).post(postProduct);
productRoute.route("/products/:id").put(updateProductController).delete(deleteProductController);

module.exports = productRoute;
