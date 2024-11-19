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
  Time: null,
  Certification: {
    type: String,
  },
  //   how many people take have this course
  userInclude: {
    type: String,
  },

  //   how many course present in this courser
  Courseinclude: null,
});

const Allcoursemodel = mongoose.model("Allcoursemodel", Allcourseschema);
