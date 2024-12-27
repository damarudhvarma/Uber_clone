import UserModel from "../models/userModule.js";




export const createUser= async({
    firstname,
    lastname,
    email,
    password,
})=>{ 

    if(!firstname || !lastname || !email || !password){
        throw new Error('All fields are required');
    }
  
    const user = await UserModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    });


    return user;
}