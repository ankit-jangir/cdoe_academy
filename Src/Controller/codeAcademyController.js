const { allUserInformation } = require("../Model/allUserInformation");
const { profileModal } = require("../Model/Profile");
const { signUpModel } = require("../Model/signUp");

const getAllData = async (req, res) => {
  try {
    let allData = await allUserInformation.find({});
    res.send(allData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const userSignUp = async (req, res) => {
  try {
    const { Mobile_Number, Email, Password } = req.body;
    console.log(Mobile_Number, Email, Password);
    const mySignUp = await signUpModel.create({
      Mobile_Number,
      Email,
      Password,
    });
    console.log(mySignUp);
    await allUserInformation.create({
      userSignUp: mySignUp._id,
    });

    res.status(200).send({ mySignUp, Message: "signup successFully" });
  } catch (error) {
    res.status(500).send(error);
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
    res
      .status(200)
      .send({ userProfile, Message: "Profile Update Successfully" });

    await allUserInformation.updateOne({
      userProfile: userProfile._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAllData, userSignUp, profileController };
