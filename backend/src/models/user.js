const { Schema, model} = require('mongoose');
const bcrypt = require('../../node_modules/bcryptjs');

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    roles:[{
        ref: 'Rol',
        type: Schema.Types.ObjectId,

    }]

},{
    timestamps:true,
    versionKey:false
})
//metodo para cifrar la contraseña

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
//metodo para comparar la contraseña
userSchema.statics.comparePassword = async(password, recivedPAssword) =>{
    return await bcrypt.compare(password, recivedPAssword )

}

module.exports = model("userSchema",userSchema);
