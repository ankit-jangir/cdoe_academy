const mongoose = require("mongoose");
const Allcourseschema = mongoose.Schema({
  // like free,careerPath
  CourseType: {
    type: String,
  },
  // like react.js part of web development
  CourseParent: {
    type: String,
  },
  //like react.js , html, css
  CourseName: {
    type: String,
  },
  Courseheading: {
    type: String,
  },
  Descripation: {
    type: String,
  },
  //   like beginner,
  Coursestage: {
    type: String,
  },
  Time:{
    type:Number,
    default:0
  },
  Certification: {
    type: String,
  },
  //   how many people take have taken this course
  userInclude: {
    type: String,
  },

  //   how many course present in this courser
  Courseinclude:{
    type:Number,
    default:0
  },
});

const Allcoursemodel = mongoose.model("Allcoursemodel", Allcourseschema);

module.exports = Allcoursemodel