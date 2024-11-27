const round = 10
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { signUpModel } = require('../Model/signUp');


const usercreate = async (req, res) => {
    try {
        const { Mobile_Number, Email, Password } = req.body;
        console.log(req.body, "b")
        if (Mobile_Number != 10) {
            res.send({ success: false, message: "invalid phone number " })


        }
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
        console.log(error);x

        // no change
    }
}


const login = async (req, res) => {

    try {
        const { Email, Password } = req.body;
        const findemail = await signUpModel.find({ Email })
        console.log(findemail, "eml");
        if (findemail) {
            const password = await bcrypt.compare(Password, findemail.password)
            console.log(password);
            if (password) {

                const payload = {
                    name: findemail.Email,
                    Mobile: findemail.Mobile_Number
                }
                const token = jwt.sign(payload, 'secret', { expiresIn: "1h" })
                console.log(token, "token")
                const tokenUpdate = await signUpModel.updateOne({ Email }, { Token: token })

                if (tokenUpdate) {
                    return res.send({ status: "001", mess: "user login successfully", token })
                }
                else {
                    return res.send({ status: "002", mess: "Internal Server Error." })
                }

            }

        }
        else {
            return res.send({
                status: 2,
                message: "Incorrect Paassword"
            })
        }

    }


    catch (error) {
        console.log(error);
    }


}


module.exports = { usercreate, login }