const { BusinessPaymentmodel } = require("../Model/Business");

const paymentbussiness = async (req, res) => {
    try {
        const { Price, Company_Name, jobTittle, Email, TotalSeatForPurchase } = req.body;
        const payment = await BusinessPaymentmodel.create({ Price, Company_Name, jobTittle, Email, TotalSeatForPurchase });
        res.status(201).json({
            message: "Payment created successfully",
            payment,
        });
    } catch (err) {
        return res.status(400).json({ success: false, message: "Unsuccessful payment" });
    }
};
const bussinessinfo = async (req, res) => {
    try {
        const showpatyminfo = BusinessPaymentmodel.find({})
        return res.send({ success: true, mess: showpatyminfo })
    } catch (error) {
        console.log(error);

    }
}


module.exports = { paymentbussiness, bussinessinfo }
