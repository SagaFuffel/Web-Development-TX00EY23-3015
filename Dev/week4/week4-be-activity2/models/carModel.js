const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } //createdAt/updatedAt
);

module.exports = mongoose.model("Car", carSchema);


