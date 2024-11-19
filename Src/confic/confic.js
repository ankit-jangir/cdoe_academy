const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/code_academy_project"

const mongodb = () => {
    mongoose.connect(url)
        .then(() => {
            console.log("mongoodb is connected...🤞🤞✌️");
        })
        .catch((error) => {
            console.log(error);
        })
}
mongodb()
module.exports = { mongodb }