const ProductModel = require("../models/product.model");
const { postProductService, deleteProductService, updateProductService } = require("../services/product.service");

module.exports.getProductController = async (req, res, next) => {
  try {
    // const result = await ProductModel.find({} , '-_id'); // projection shortcut
    // const result = await ProductModel.find({}).select({name : 0}).limit(1).skip(2); // methods
    // const result = await ProductModel.find({}).where("name").equals.where('price').gt(500);
    const result = await ProductModel.find({});
    res.send({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports.postProductController = async (req, res, next) => {
  try {
    const result = await postProductService(req);
    res.send({
      success: true,
      message: "data insert successful",
      insertedData: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports.updateProductController = async (req, res, next) => {
  try {
    const result = await updateProductService({ req, next });
    res.send({
      success: true,
      message: "data update successful",
      updatedDoc: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteProductController = async (req, res, next) => {
  try {
    const result = await deleteProductService(req);
    res.send({
      success: true,
      result,
    });
  } catch (error) {
    next(error);
  }
};
