const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    // name : String
    name: {
      type: String,
      required: [true, "field must be require"],
      unique: [true, "please provide a unique name"],
      trim: true, // age porer ajaira space bad dia deyar jonno,
      minLength: [3, "name is to small"],
      maxLength: [70, "name is to large"],
    },
    description: {
      type: String,
      required: [true, "field must be require"],
    },
    price: {
      type: Number,
      required: [true, "filed must be require"],
      min: [0, "price can't be negetive"],
    },
    unit: {
      type: String,
      required: [true, "filed must be require"],
      // enum : ["kg" , "peace" , "liter"] // predefine value (er baire kono value accept kobe na)
      enum: {
        values: ["kg", "peace", "liter"],
        message: "unit value must be kg/peace/liter", //error msg er jonno
      },
    },
    quantity: {
      type: Number,
      required: [true, "filed must be require"],
      min: [0, "price can't be negetive"],
      // for custom validation (this function can help us to get the value from user and we can do anything by this)
      validate: {
        validator: (value) => {
          if (Number.isInteger(value)) {
            return true;
          } else {
            return false;
          }
        },
        message: "quantity must e an integer",
      },
    },
    status: {
      type: String,
      required: [true, "filed must be require"],
      enum: {
        values: ["in-stock", "out-of-stock"],
        message: `status can't be {VALUE}`,
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId, // supplier collection er akta user er id rakha hoise
      ref: "Supplier", // supplier model er ref raikha deya hoise
    },
    category: [
      {
        name: {
          type: String,
        },
        _id: {
          type: mongoose.Schema.Types.ObjectId,
        },
      },
    ],
    // createdAt : {
    //   type : Date,
    //   default : Date.now // we can set default value if user not set anything defaule vaue will add
    // } ,
    // updatedAt : {
    //   type : Date,
    //   default : Date.now
    // }
  },
  {
    timestamps: true,
    // _id : false
  }
);

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
