const jwt = require('jsonwebtoken')
const config = require('../config');
const user = require('../models/user');
const Role = require('../models/roles');

const verifyToken = {};
verifyToken.verify = async (req,res,next)=>{
    try{
        // solicita un toquen por el heders
        const Token = req.headers["x-access-token"]
        // si no se envia el token reterno no token providen si
        if(!Token) return res.status(403).json({message:'no token provided'});
        // verifica el toquen y devuelve el _id del token
        const decoded = jwt.verify(Token,config.secret);
        req.userId = decoded.id
        const User = await user.findById(req.userId,{password : 0} )
        if(!User) return res.status(404).json({message:'no user found'})

        // crea el curso
        next()
    }catch(err){
        return res.status(401).json({message: "usuario invalido"})
    }
}

verifyToken.isEstudiante = async(req,res,next) =>{
    const User =  await user.findById(req.userId)
    const roles = await Role.find({_id: {$in: User.roles}})
    next()
}
verifyToken.isinstructor = async(req,res,next) =>{
    const User =  await user.findById(req.userId)
    
    const Roles = await Role.find({_id: {$in: User.roles}})
    console.log(Roles[0].name)
    if(Roles[0].name != "instructor") return res.json({message:'no tienes suficientes permisos'})
    next()
}

module.exports = verifyToken