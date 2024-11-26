const { Businessmodel } = require("../Model/Business");
const bussinesscreate = async (req, res) => {
    try {
        const { Price, Company_Name, jobTittle, Email, TotalSeatForPurchase } = req.body
        const business = await BusinessModel.create({ Price, Company_Name, jobTittle, Email, TotalSeatForPurchase });
        res.status(201).json({ success: true, data: business });
    } catch (error) {
        res.status(500).json({ success: false, message: "bussiness data not created " });
    }
};

const bussinessshow = async (req, res) => {
    try {
        const show = await Businessmodel.find({});
        res.send(200).json({ success: true, message: "done" })
    } catch (error) {
        console.log(error);
    }
};
module.exports = { bussinesscreate, bussinessshow }