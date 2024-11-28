const { default: mongoose } = require("mongoose");

module.exports.tryCatchHandler = async (fun, req, res) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        // Pass session to the function being wrapped, so it can be used within the transaction
        await fun(req, res, session);
        await session.commitTransaction();
        console.log('success');
    } catch (error) {
        console.log('error:', error);
        await session.abortTransaction();
        return res.status(500).json({
            message: "An error occurred.",
            error: error.message || 'Unknown error'
        });
    } finally {
        session.endSession();
    }
};