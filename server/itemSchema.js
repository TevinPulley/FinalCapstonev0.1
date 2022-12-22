const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  image: {
    type: String,
    requiered: [true],
  },

  name: {
    type: String,
    required: [true, "name feild is required"],
  },

  size: {
    type: String,
    required: false,
  },

  specs: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: [true, "description is required"],
  },

  price: {
    type: String,
    required: [true, "price is required"],
  },
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;
