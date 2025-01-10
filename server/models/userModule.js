import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema= new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String
    },
   
});


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

userSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(Password, this.password);
};


userSchema.statics.hashPassword = async function (Password){
    return await bcrypt.hash(Password,10);

}

 const UserModel = mongoose.model('User',userSchema);

 export default UserModel;

