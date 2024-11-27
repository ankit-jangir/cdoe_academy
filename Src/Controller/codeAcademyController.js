const { allUserInformation } = require("../Model/allUserInformation");
const { profileModal } = require("../Model/Profile");
const ProjectModel = require("../Model/Project");
// const { signUpModel } = require("../Model/signUp");
const bcyrpt = require('bcrypt');

const getAllData = async (req, res) => {
  try {
    let allData = await allUserInformation.find({});
    res.send(allData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};



const profileController = async (req, res) => {
  try {
    const {
      User_Name,
      Bio,
      Location,
      Github,
      Linkedin,
      Twitter,
      Personal_Website,
    } = req.body;

    let userProfile = await profileModal.create({
      User_Name,
      Bio,
      Location,
      Github,
      Linkedin,
      Twitter,
      Personal_Website,
    });
    resku
      .status(200)
      .send({ userProfile, Message: "Profile Update Successfully" });

    await allUserInformation.updateOne({
      userProfile: userProfile._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getproject = async (req, res) => {
  try {
    let project = await ProjectModel.find({})
    res.send(project)
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getAllData, profileController, getproject };