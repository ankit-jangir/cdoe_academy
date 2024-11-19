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
  MyPayment: { type: schema.Types.ObjectId, ref: "BusinessPayment" },
});

const Businessmodel = mongoose.model("Businessmodel", BusinessSchema);

const BusinessPaymentSchema = mongoose.Schema({
  CardNumber: {
    type: Number,
  },
  ExpirationDate: {
    type: Number,
  },
  CVVNumber: {
    type: number,
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

const BusinessPaymentmodel = mongoose.model(
  "BusinessPayment",
  BusinessPaymentSchema
);
