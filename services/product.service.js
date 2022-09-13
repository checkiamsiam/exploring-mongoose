const ProductModel = require("../models/product.model");

module.exports.postProductService = async (data) => {
  const productData = new ProductModel(data);
  if (productData.quantity > 0) {
    productData.status = "in-stock";
  } else {
    productData.status = "out-of-stock";
  }
  const result = await productData.save();
  return result;
};
module.exports.deleteProductService = async (data) => {
  const filter = { _id: data };
  const action = ProductModel.deleteOne(filter);
  return action;
};
