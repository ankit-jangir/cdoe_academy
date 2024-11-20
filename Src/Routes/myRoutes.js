const express = require("express");
const {
  getAllData,
  userSignUp,
  // addAllData,
  profileController,
  getproject,
} = require("../Controller/codeAcademyController");
const projectcreate = require("../Controller/backController");
const filtercoursetopic = require("../Controller/coursetopicfilter");
const Router = express.Router();

// Router.get("/getAllData", getAllData);
Router.get("/getproject", getproject);

Router.post("/signUp", userSignUp);
Router.post("/profile", profileController);
Router.post("/project", projectcreate)
Router.post('/filter', filtercoursetopic)

module.exports = Router;
