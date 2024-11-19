const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  User_Name: {
    type: String,
  },

  Bio: {
    type: String,
  },
  Location: {
    type: String,
  },
  Github: {
    type: String,
  },
  Linkedin: {
    type: String,
  },
  Twitter: {
    type: String,
  },
  Personal_Website: {
    type: String,
  },
});

const profileModal = mongoose.model("profile", profileSchema);
module.exports = { profileModal };
