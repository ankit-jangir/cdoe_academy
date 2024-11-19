const mongoose = require("mongoose");
const signUpSchema = mongoose.Schema({
  Mobile_Number: {
    type: Number,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
});

const signUpModel = mongoose.model("signUp", signUpSchema);

module.exports = { signUpModel };
