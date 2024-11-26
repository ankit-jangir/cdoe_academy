const mongoose = require("mongoose")
const EventSchema = mongoose.Schema({
    Tittle: {
        type: String
    },
    Date: {
        type: String
    },
    Time: {
        type: String
    },
    Description: {
        type: String
    },
    Youtubelink: {
        type: String
    },
    Total_user: { type: Number, default: 0 }

})

const Eventmodel = mongoose.model('Eventmodel', EventSchema)
module.exports = Eventmodel