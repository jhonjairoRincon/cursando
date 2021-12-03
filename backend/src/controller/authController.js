const userSchema = require('../models/user');
const jwt = require('jsonwebtoken')
const config = require('../config')
const Roles =  require('../models/roles')

const usersAuth = {}

usersAuth.login = async (req,res) => {

    
    const userFound = await userSchema.findOne({email: req.body.email}).populate('roles')

    if(!userFound) return res.json({message: 'usuario no encontrado'})

    const contraseñaCorrecta = await userSchema.comparePassword(req.body.password, userFound.password)
    if(!contraseñaCorrecta) return res.json({message: 'la contraseña no coinciden'})
    
    const token = jwt.sign({ id: userFound._id},config.secret, {
        expiresIn: 86400
    })
    const id = userFound._id
    const roles = userFound.roles[0].name
    res.json({token,id,roles})

}

usersAuth.register = async(req,res) => {
    try{
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

        //generamos un token a traves del id del objeto creado, con una palabra clave
        const token =  jwt.sign({id: userRegister._id}, config.secret, {
            expiresIn: 86400
        })
        const id = userRegister.id
        res.json({token, id })

    
    }catch(error ){
       return error
    }
   
}

module.exports = usersAuth;
