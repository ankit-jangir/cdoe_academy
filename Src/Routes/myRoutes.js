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
const { paymentbussiness, bussinessinfo } = require("../Controller/bussinesspayment");
const { bussinesscreate } = require("../Controller/Bussiness");
const eventcreate = require("../Controller/Event");
const usercreate = require("../Controller/login");
const route = express.Router();

// route.get("/getAllData", getAllData);
route.get("/getproject", getproject);

route.post("/signUp", userSignUp);
route.post("/profile", profileController);
route.post("/project", projectcreate)
route.post('/filter', filtercoursetopic)
route.post("/bussiness", bussinesscreate)
route.post("/payment", paymentbussiness)
route.get("/paymentshow", bussinessinfo)
route.post('/event', eventcreate)
route.post('/reg', usercreate)
module.exports = route;
