const userSchema = require('../models/user');
const jwt = require('jsonwebtoken')
const config = require('../config')
const Roles =  require('../models/roles')

const usersAuth = {}

usersAuth.login = async (req,res) => {

    
    const userFound = await userSchema.findOne({email: req.body.email}).populate('roles')

    if(!userFound) return res.json({message: 'usuario no encontrado'})

    const contraseñaCorrecta = await userSchema.comparePassword(req.body.password, userFound.password)
    if(!contraseñaCorrecta) return res.json({mesaage: 'la contraseña no coinciden'})
    
    const token = jwt.sign({ id: userFound._id},config.secret, {
        expiresIn: 86400
    })
    res.json({token})
    console.log(userFound)

}

usersAuth.register = async(req,res) => {
    const {username, email, password, roles} = req.body;
    
    // recibe los datos del usuario, encrita el password 
    const newUser = new userSchema({
        username,
        email,
        password: await userSchema.encryptPassword(password)
    })

    if(req.body.roles){
        const foundRoles = await Roles.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)

    }else{
        const role = await Roles.findOne({name: 'estudiante'})
        newUser.roles  = [role._id]
    }

    const userRegister = await  newUser.save();
    console.log(userRegister)

    //generamos un token a traves del id del objeto creado, con una palabra clave
    const token =  jwt.sign({id: userRegister._id}, config.secret, {
        expiresIn: 86400
    })

    res.json({token})
   
}

module.exports = usersAuth;
