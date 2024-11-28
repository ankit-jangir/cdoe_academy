const mongoose = require("mongoose");
const studentMembershipSchema = mongoose.Schema({
  Country: {
    type: String,
  },
  School: {
    type: String,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  DateOfBirth: {
    type: String,
  },
  EmailAddress: {
    type: String,
  },
});

const studentMembershipModal = mongoose.model(
  "StudentMemberShip",
  studentMembershipSchema
);
module.exports = studentMembershipModal;
