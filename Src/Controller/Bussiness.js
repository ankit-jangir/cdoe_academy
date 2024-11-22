const bussinesscreate = (async (req, res) => {
    try {
        const data = { Price, Company_Name, jobTittle, Email, TotalSeatForPurchase, MyPayment } = req.body
        const business = await BusinessModel.create({ Price, Company_Name, jobTittle, Email, TotalSeatForPurchase, MyPayment });
        res.status(201).json({ success: true, data: business });
    } catch (error) {
        res.status(500).json({ success: false, message: "bussiness data not created " });
    }
})
module.exports = bussinesscreate