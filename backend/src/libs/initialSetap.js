const Role = require('../models/roles');

createroles = {}
 createroles.createRoles = async() =>{
try{

  const count =  await Role.estimatedDocumentCount()

  if(count > 0) return;

  const value = await Promise.all([
    new Role({name: 'estudiante'}).save(),
    new Role({name: 'instructor'}).save(),
    new Role({name: 'administrador'}).save()
  ])
  
  console.log(value)
  } catch (err){
      console.log(err)
  }
}

module.exports = createroles