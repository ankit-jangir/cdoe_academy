const round = 10
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { signUpModel } = require('../Model/signUp');
const usercreate = async (req, res) => {
    try {
        const { Mobile_Number, Email, Password } = req.body;
        console.log(req.body , "b")
        const find = await signUpModel.findOne({ Email })
        console.log(find);
        if (find) {
            return res.status(400).send({ message: "email already exist" })
        }
        const hashpass = await bcrypt.hash(Password, round);

        console.log(hashpass);
        const payload = {
            name: Mobile_Number,
            
            eml: Email,
            pass: Password
        }
        const token = await jwt.sign(payload, "secret", { expiresIn: '1h' })
        console.log(token);
        await signUpModel.create({
            Mobile_Number: Mobile_Number,
            Email: Email,
            Password: hashpass,
            Token: token
        })
        res.send({ status: "001", mess: "user registerd successfully", token })

    } catch (error) {
        console.log(error);

    }
}
module.exports = usercreate