const mongoose = require("mongoose")
const EventSchema = mongoose.Schema({
    Tittle:{
        type:String
    },
    Date:{
        type:String
    },
    Time:{
        type:String
    },
    Description:{
        type:String
    },
    Youtubelink:{
        type:String
    },
    Total_user:null
   
})

const Eventmodel = mongoose.model('Eventmodel',EventSchema)