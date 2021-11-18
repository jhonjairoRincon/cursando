 const { Schema, model} = require('mongoose');

 const cursoSchema = new Schema({
     name: {type: String, required: true},
     categoria: {type: String, required: true},
     autor: {type: String, required: true},

 },{
     timestamps: true,
     versionKey: false
 })

 module.exports = model('curso', cursoSchema)