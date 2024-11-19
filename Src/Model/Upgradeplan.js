const mongoose = require("mongoose");
const Upgradeplanschema = mongoose.Schema({
  Price: {
    type: Number,
    default: "free",
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
