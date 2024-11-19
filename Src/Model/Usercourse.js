const mongoose = require("mongoose");
const usercourseschema = mongoose.schema({
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

const usercoursemodel = mongoose.model("usercourse", usercourseschema);
