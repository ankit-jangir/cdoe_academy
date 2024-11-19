const mongoose = require("mongoose");

const langaugeSchema = mongoose.Schema({
  language: {
    type: String,
  },
  relatedSubject: {
    type: Array,
  },
});

const langaugeModel = mongoose.model("langauge", langaugeSchema);
