const mongoose = require("mongoose");
const Upgradeplanschema = mongoose.Schema({
  Price: {
    type: Number,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Pincode: {
    type: Number,
  },
});

const Upgradeplanmodel = mongoose.model("Upgradeplan", Upgradeplanschema);
module.exports = Upgradeplanmodel;
