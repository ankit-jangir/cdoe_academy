const { allUserInformation } = require("../Model/allUserInformation");
const Businessmodel = require("../Model/Business");
const { profileModal } = require("../Model/Profile");
const { signUpModel } = require("../Model/signUp");
const studentMembershipModal = require("../Model/StudentMembership");
const Upgradeplanmodel = require("../Model/Upgradeplan");
const userCourseModel = require("../Model/Usercourse");
const ProjectModel = require("../Model/Project");
const Eventmodel = require("../Model/Event");
const Allcoursemodel = require("../Model/Allcourse");
const CourseTopicmodel = require("../Model/CourseTopic");
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const getAllData = async (req, res) => {
  try {
    let allData = await allUserInformation.find({});
    res.send(allData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
5
// what is benifit of use throw new error apart from return ,409
const userSignUp = async (req, res) => {
  try {
    const { Mobile_Number, Email, Password } = req.body;
    const Validation = zod.object({
      Mobile_Number: zod.number(),
      Email: zod.string(),
      Password: zod.string(),
    });

    await Validation.parse(req.body);
    const existing_user = await signUpModel.find({ Email });
    if (existing_user.length > 0) {
      return res.status(409).send({ Message: "user already existing" });
    }

    const hashPassword = await bcrypt.hash(Password, 10);
    const payload = {Email:Email,Password:Password}
    const token = await jwt.sign({payload},'secret',{expiresIn:'78h'})
    const mySignUp = await signUpModel.create({
      Mobile_Number,
      Email,
      Password: hashPassword,
      Token:token
    });

    // add id in allUserInformation modal
    await allUserInformation.create({
      userSignUp: mySignUp._id,
    });

    return res.status(200).send({ mySignUp, Message: "signup successFully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const UserLogin = async (req,res)=>{
try {
  const {Email,Password} = req.body;
  const result = await signUpModel.findOne({Email})
  if (result) {
    password = await bcrypt.compare(Password,result.Password);
    if (password) {
      const payload = {
        Name:result.Name,
        Email:Email
      }
      const Token = await jwt.sign(payload,'secret',{expiresIn:"78h"})
      const TokenUpdate = await signUpModel.updateOne({Email},{Token:Token})
      if (TokenUpdate) {
        return res.send({status:"001",message:"User login successfully",Token})
        
      } else {
        return res.send({status:"002",message:"Your information was not match "})
      }
      
    } else {
      return res.send({status:2,message:"Incorrect password"})
    }
    
  } else {
    return res.send({status:2,message:"Register your account "})
  }
} catch (error) {
  console.log(error);
  return res.status(500).send({ status: "004", message: "An error occurred, please try again later" });
  
}
  
}
const UserLogout = async (req,res)=>{
try {
  console.log(req.signUpModel);
  const logout = await signUpModel.findOneAndUpdate({Email:req.signUpModel.Email},{Token:null})
  res.status(200).json({message:"logout successfully"})
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
    console.log(error);
    return res.status(500).send(error);
  }
};

const userCourseController = async (req, res) => {
  try {
    const { Chosesourse, Achieve, Codeexprence } = req.body;
    const getResponse = await userCourseModel.create({
      Chosesourse,
      Achieve,
      Codeexprence,
    });
    res.status(200).send({ Message: "add Course successfully", getResponse });
    await allUserInformation.updateOne({
      My_Course: getResponse._id,
    });
  } catch (error) {
    res.status(500).send({ Message: error });
  }
};

const upgradePlaneController = async (req, res) => {
  try {
    const { Price, FirstName, LastName, Pincode } = req.body;
    const getResponse = await Upgradeplanmodel.create({
      Price,
      FirstName,
      LastName,
      Pincode,
    });

    res.status(200).send({ Message: "upgrade Plane", getResponse });
    await allUserInformation.updateOne({
      Upgradeplan: getResponse._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const studentMembershipController = async (req, res) => {
  try {
    const { Country, School, FirstName, LastName, DateOfBirth, EmailAddress } =
      req.body;
    const getResponse = await studentMembershipModal.create({
      Country,
      School,
      FirstName,
      LastName,
      DateOfBirth,
      EmailAddress,
    });
    res.status(200).send({ getResponse });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const BusinessmodelController = async (req, res) => {
  try {
    const {
      Price,
      Company_Name,
      jobTittle,
      Email,
      TotalSeatForPurchase,
      CardNumber,
      ExpirationDate,
      CVVNumber,
      FirstName,
      LastName,
      Country,
      PostalCode,
    } = req.body;

    const getResponse = await Businessmodel.create({
      Price,
      Company_Name,
      jobTittle,
      Email,
      TotalSeatForPurchase,
      CardNumber,
      ExpirationDate,
      CVVNumber,
      FirstName,
      LastName,
      Country,
      PostalCode,
    });

    res.status(200).send({ getResponse });
  } catch (error) {
    console.log(error);
  }
};

const getproject = async (req, res) => {
  try {
    let project = await ProjectModel.find({});
    if (project.length == 0) {
      return res.status(404).send({ Message: "data not found" });
    }
    res.status(200).send(project);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};
const getEvent = async (req, res) => {
  try {
    let event = await Eventmodel.find({});

    if (event.length == 0) {
      return res.status(404).send({ Message: "data not found" });
    }
    res.status(200).send({ event });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = req.params.id;

    const updateEvent = await Eventmodel.findByIdAndUpdate(
      id,
      { $inc: { Total_user: 1 } }, // Increment Total_user by 1
      { new: true }
    );
    if (!updateEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({
      message: "Event updated successfully",
      updateEvent,
    });
  } catch (err) {
    res.status(500).send({ error: "Internal server error", err });
  }  
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Allcoursemodel.find();

    if (courses.length == 0) {
      return res.status(404).send({ Message: "data not found" });
    }

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching courses.",
      error: error.message,
    });
  }
};

const createCourseTopic = async (req, res) => {
  try {
    const { Mytopic } = req.body;

    if (!Array.isArray(Mytopic) || Mytopic.length === 0) {
      return res.status(400).json({
        message: "Mytopic must be a non-empty array.",
      });
    }

    const newTopic = new CourseTopicmodel({ Mytopic });
    await newTopic.save();

    res.status(201).json({
      message: "Course topic created successfully!",
      topic: newTopic,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the course topic.",
      error: error.message,
    });
  }
};

const filterCourseTopic = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({
        message: "Keyword query parameter is required.",
      });
    }

    const filteredTopics = await CourseTopicmodel.find({
      Mytopic: { $regex: keyword, $options: "i" }, // Case-insensitive partial match
    });

    res.status(200).json({
      message: "Filtered topics retrieved successfully!",
      topics: filteredTopics,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while filtering topics.",
      error: error.message,
    });
  }
};

module.exports = {
  getAllData,
  userSignUp,
  UserLogin,
  UserLogout,
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
};
