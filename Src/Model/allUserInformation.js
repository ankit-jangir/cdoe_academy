// const schema = require("mongoose");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userSignUp: {
    type: mongoose.ObjectId,
    ref: "signUp",
    default: null,
    required: true,
  },
  userProfile: {
    type: mongoose.ObjectId,
    ref: "profile",
    default: null,
  },
  My_Course: {
    type: mongoose.ObjectId,
    ref: "usercourse",
    default: null,
  },
  Upgradeplan: {
    type: mongoose.ObjectId,
    ref: "Upgradeplan",
  },
  UpgradeplanType: {
    type: String,
    default: "free",
  },
  studentMemberShip: {
    type: mongoose.ObjectId,
    ref: "StudentMemberShip",
    default: null,
  },
});

const allUserInformation = mongoose.model("allUserInformation", schema);

module.exports = { allUserInformation };
