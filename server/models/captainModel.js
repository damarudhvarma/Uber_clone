import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema = new mongoose.Schema({
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
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            select:false,
        },
        socketId:{
            type:String
        },
        status:{
            type:String,
            enum:["online","offline"],  
            default:"offline"
        },
        vehicle:{
            color:{
                type:String,
                required:true
            },
            plate:{
                type:String,
                required:true
            },
            capacity:{
                type:Number,
                required:true,
                min:[1,"Capacity must be atleast 1"],

            },
            vehicleType:{
                type:String,
                required:true,
                enum:["car","motorcycle","auto"]
            }
        },
        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,
            }
        },    


});


captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

captainSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(Password, this.password);
};

captainSchema.statics.hashPassword = async function (Password){
    return await bcrypt.hash(Password,10);

}


const CaptainModel = mongoose.model('Captain',captainSchema);

export default CaptainModel;