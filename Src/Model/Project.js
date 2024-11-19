const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  Tittle: {
    type: String,
  },
  Description: {
    type: String,
  },
  Text: {
    type: String,
  },
});
const ProjectModel = mongoose.model("ProjectModel", ProjectSchema);
