const CourseTopicmodel = require("../Model/CourseTopic");

const filtercoursetopic = async (req, res) => {

    try {
        const { Mytopic } = req.body;

        const filteredArray = Mytopic.filter(topic => topic);

        if (filteredArray.length === 0) {
            return res.status(400).json({ error: "No such topics provided." });
        }

        const filteredTopics = await CourseTopicmodel.find({
            Mytopic: { $in: filteredArray }
        });


        const updatedTopic = new CourseTopicmodel({
            Mytopic: filteredArray,
        });

        await updatedTopic.save();

        res.status(200).json(filteredTopics);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to filter topics!" });
    }

};


module.exports = filtercoursetopic;
