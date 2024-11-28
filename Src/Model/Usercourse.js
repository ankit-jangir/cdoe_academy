const mongoose = require("mongoose");
const usercourseschema = mongoose.Schema({
  Chosesourse: {
    type: String,
  },
  Achieve: {
    type: String,
  },
  Codeexprence: {
    type: String,
  },
});

const userCourseModel = mongoose.model("usercourse", usercourseschema);
module.exports = userCourseModel;
