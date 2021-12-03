const user = require ('../models/user')

const User = {}

User.listarUser = async (req,res)=>{
    const userdb = await user.find()
    res.json(userdb)

};

User.filtrarUser = async (req,res)=>{
    const userdb = await user.findById(req.params.id)
    res.json(userdb)
};



module.exports = User;