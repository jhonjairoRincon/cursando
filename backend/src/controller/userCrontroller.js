const user = require ('../models/user')

const User = {}

User.listarUser = async (req,res)=>{
    const userdb = await user.find()
    res.send(userdb)

};



module.exports = User;