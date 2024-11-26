const Eventmodel = require("../Model/Event");

const eventcreate = async (req, res) => {
    try {
        const { Tittle, Date, Time, Description, Youtubelink, Total_user } = req.body;

        console.log(req.body , "d")
        const newEvent = new Eventmodel({
            Tittle,
            Date,
            Time,
            Description,
            Youtubelink,
            Total_user: Total_user || 0,
        });
        const savedEvent = await newEvent.save();

        res.status(201).json({ message: "Event created successfully", data: savedEvent });
    } catch (error) {
        res.status(500).json({ message: "Error creating event", error: error.message });
    }
}
module.exports = eventcreate