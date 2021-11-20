const { Schema, model} = require('mongoose');



const rolSchema = new Schema({
    name: String

},{
    versionKey: false
}
)

rolSchema.ROLES = ["estudiante", "instructor", "admin"];

module.exports = model("Rol",rolSchema);
