const mongoose = require("mongoose")
const CourseTopicschema = mongoose.Schema({
    Mytopic: {
        type: Array
    }
})
const CourseTopicmodel = mongoose.model('CourseToipcs', CourseTopicschema)
module.exports = CourseTopicmodel;