const express = require("express");
const route = express.Router();

const {
  getAllData,

  profileController,
  getproject,
} = require("../Controller/codeAcademyController");
const projectcreate = require("../Controller/backController");
const filtercoursetopic = require("../Controller/coursetopicfilter");
const { paymentbussiness, bussinessinfo } = require("../Controller/bussinesspayment");
const { bussinesscreate } = require("../Controller/Bussiness");
const eventcreate = require("../Controller/Event");
const { login } = require("../Controller/login");


route.post('/filterdatashow', getAllData)
route.get("/getproject", getproject);


route.post("/profile", profileController);
route.post("/project", projectcreate)
route.post('/filter', filtercoursetopic)
route.post("/bussiness", bussinesscreate)
route.post("/payment", paymentbussiness)
route.get("/paymentshow", bussinessinfo)
route.post('/event', eventcreate)
route.post('/register', login)



module.exports = route