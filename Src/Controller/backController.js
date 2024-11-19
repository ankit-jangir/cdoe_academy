const ProjectModel = require('../Model/Project')

const projectcreate = async(req,res)=>{
    try {
        const {Tittle,Description,Text} = req.body
        const result = await ProjectModel.create({
            Tittle:Tittle,
            Description:Description,
            Text:Text

        })
        res.status(201).json({message:"created successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = projectcreate