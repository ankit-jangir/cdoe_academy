const express = require("express");
const {
  getAllData,
  userSignUp,
  addAllData,
  profileController,
} = require("../Controller/codeAcademyController");
const Router = express.Router();

Router.get("/getAllData", getAllData);
Router.post("/signUp", userSignUp);
Router.post("/profile", profileController);

module.exports = Router;
