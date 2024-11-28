const mongoose = require("mongoose");
const { string } = require("zod");
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
  Token:{
    type:String
  }
});

const signUpModel = mongoose.model("signUp", signUpSchema);

module.exports = { signUpModel };
