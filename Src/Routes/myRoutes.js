const express = require("express");
const {
  getAllData,
  userSignUp,
  // addAllData,
  profileController,
  getproject,
} = require("../Controller/codeAcademyController");
const projectcreate = require("../Controller/backController");
const Router = express.Router();

// Router.get("/getAllData", getAllData);
Router.get("/getproject", getproject);

Router.post("/signUp", userSignUp);
Router.post("/profile", profileController);
Router.post("/project",projectcreate)

module.exports = Router;
