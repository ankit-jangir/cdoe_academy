const mongoose = require("mongoose")
const StudentMembershipschema = mongoose.Schema({
    Country:{
        type:String
    },
    School:{
        type:String
    },
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    DateOfBirth:{
        type:String
    },
    EmailAddress:{
        type:String
    },

})

const StudentMemberShipmodel = mongoose.model('StudentMemberShip',StudentMembershipschema)