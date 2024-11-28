const express = require("express");
const {
  getAllData,
  userSignUp,
  addAllData,
  profileController,
  userCourseController,
  upgradePlaneController,
  studentMembershipController,
  BusinessmodelController,
  getproject,
  getEvent,
  updateEvent,
  getAllCourses,
  createCourseTopic,
  filterCourseTopic,
  UserLogin,
  UserLogout,
} = require("../Controller/codeAcademyController");
const { projectcreate, Eventcreate, AllCourseCreate } = require("../Controller/backController");
const Course = require("../Controller/trandingLang");
const { tryCatchHandler } = require("../utils/tryCatchHandler");
const upload = require("../Middleware/multer");
const Router = express.Router();

Router.get("/getAllData", getAllData);
Router.post("/signUp", userSignUp);
Router.get("/UserLogin",UserLogin);
Router.post("/Logout",UserLogout)
Router.post("/profile", profileController);
Router.post("/userCourse", userCourseController);
Router.post("/upgradePlane", upgradePlaneController);
Router.post("/studentMembership", studentMembershipController);
Router.post("/Businessmodel", BusinessmodelController);
Router.post("/project",projectcreate)
Router.post("/Event",Eventcreate)
Router.get("/getproject", getproject);
Router.get("/getEvent",getEvent);
Router.put("/updateevent/:id",updateEvent)
Router.post("/addAllCourses" , AllCourseCreate)
Router.post("/getAllCourses" , getAllCourses)

Router.post("/create-course-topic", createCourseTopic);
Router.get("/filter-course-topic", filterCourseTopic);
Router.post('/create', upload.single('thumbnail'),(req, res) => {
  tryCatchHandler(Course.CreateCourse, req, res);
})
Router.get('/allCourses', (req, res) => {
  tryCatchHandler(Course.GetCourses, req, res)
})
Router.put('/courses/:id', (req, res) => {
  tryCatchHandler(Course.UpdateCourse, req, res)
});
Router.delete('/courses/:id', (req, res) => {
  tryCatchHandler(Course.DeleteCourse, req, res)
});
module.exports = Router;

// custom error
//process.env file
