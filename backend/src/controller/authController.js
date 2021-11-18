const userSchema = require('../models/user');
const jwt = require('jsonwebtoken')
const config = require('../config')

const usersAuth = {}

usersAuth.login = async (req,res) => {
    
    res.json('login');

}

usersAuth.register = async(req,res) => {
    const {username, mail, password, roles} = req.body;
    
    // recibe los datos del usuario, encrita el password 
    const newUser = new userSchema({
        username,
        mail,
        password: await userSchema.encryptPassword(password)
    })
    const userRegister = await  newUser.save();
    //generamos un token a traves del id del objeto creado, con una palabra clave
    const token =  jwt.sign({id: userRegister._id}, config.secret, {
        expiresIn: 86400
    })

    res.json({token})
   
}

module.exports = usersAuth;
