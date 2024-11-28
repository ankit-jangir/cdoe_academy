const mongoose = require("mongoose");

// Define the schema
const EventSchema = mongoose.Schema({
    Tittle: {
        type: String,
        required: true // Optionally make it mandatory
    },
    Date: {
        type: String, // Store only the date as a string in 'YYYY-MM-DD' format
    },
    Time: {
        type: String, // Store only the time as a string in 'HH:mm' (24-hour format)
    },
    Description: {
        type: String
    },
    Youtubelink: {
        type: String
    },
    Total_user: {
        type: Number,
        default: 0
    }
});

// Middleware to process and separate Date and Time
EventSchema.pre('save', function (next) {
    const now = new Date();

    // Set 'Date' in 'YYYY-MM-DD' format
    this.Date = now.toISOString().split("T")[0];

    // Set 'Time' in 'HH:mm' format
    this.Time = now.toTimeString().split(" ")[0].substring(0, 5);
    
    next();
});


const EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;
