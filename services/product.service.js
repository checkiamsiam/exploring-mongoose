const ProductModel = require("../models/product.model");

module.exports.postProductService = async (req) => {
  const productData = new ProductModel(req.body);
  if (productData.quantity > 0) {
    productData.status = "in-stock";
  } else {
    productData.status = "out-of-stock";
  }
  const result = await productData.save();
  return result;
};
module.exports.updateProductService = async ({ req, next }) => {
  const filter = { _id: req.params.id };

  // find by id diye update korle return e updated doc ta pawa jay (akhetre ooption new true dite hobe naile puran data e dibe)
  const action = await ProductModel.findByIdAndUpdate(
    filter,
    {
      $set: req.body,
    },
    { upsert: true , new : true})

  return action;
};
module.exports.deleteProductService = async (req) => {
  const filter = { _id: req.params.id };
  const action = ProductModel.deleteOne(filter);
  return action;
};
