const Eventmodel = require('../Model/Event')
const ProjectModel = require('../Model/Project')
const Allcoursemodel = require('../Model/Allcourse')

const projectcreate = async (req, res) => {
    try {
        const { Tittle, Description, Text } = req.body
        const result = await ProjectModel.create({
            Tittle: Tittle,
            Description: Description,
            Text: Text
        })
        res.status(201).json({ message: "created successfully" })
    } catch (error) {
        console.log(error);

    }
}
const Eventcreate = async (req, res) => {
    try {
        const { Tittle, Description, } = req.body
        const result = await Eventmodel.create({
            Tittle: Tittle,
            Description: Description
        })
        res.status(201).json({ message: "created successfully" })
    } catch (error) {
        console.log(error);

    }
}
const AllCourseCreate = async (req, res) => {
    try {
        const {
            CourseType,
            CourseParent,
            CourseName,
            Courseheading,
            Descripation,
            Coursestage,
            Time,
            Certification,
            userInclude,
            Courseinclude,
        } = req.body;
        const newCourse = await Allcoursemodel.create({
            CourseType,
            CourseParent,
            CourseName,
            Courseheading,
            Descripation,
            Coursestage,
            Time,
            Certification,
            userInclude,
            Courseinclude,
        });

        await newCourse.save();

        res.status(201).json({
            message: "Course created successfully!",
            course: newCourse,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while creating the course.",
            error: error.message,
        });
    }
};

module.exports = { projectcreate, Eventcreate, AllCourseCreate }     