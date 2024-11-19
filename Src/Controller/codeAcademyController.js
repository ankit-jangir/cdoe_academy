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

const singup = async (req, res) => {
  try {
      const { Mobile_Number, Email, Password } = req.body
      if(Mobile_Number.length!=10){
          res.send({message:"Phone_number error"})
      }
      const Hash_Password = await bcyrpt.hash(Password, 10)
      const result = await user.create({
          Mobile_Number: Mobile_Number,
          Email: Email,
          Password: Hash_Password
      }) 
      res.send({ status: "001", message: "succesfully singup" })
  } catch (error) {
      console.log(error);
  }
} 

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
