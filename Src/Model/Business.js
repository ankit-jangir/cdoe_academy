const mongoose = require("mongoose");
const BusinessSchema = mongoose.Schema({
  Price: {
    type: String,
  },
  Company_Name: {
    type: String,
  },
  jobTittle: {
    type: String,
  },
  Email: {
    type: String,
  },
  TotalSeatForPurchase: {
    type: Number,
  },
  CardNumber: {
    type: Number,
  },
  ExpirationDate: {
    type: Number,
  },
  CVVNumber: {
    type: Number,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Country: {
    type: String,
  },
  PostalCode: {
    type: Number,
  },
});

const Businessmodel = mongoose.model("Businessmodel", BusinessSchema);

module.exports = Businessmodel;
