const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:String,
    avtar:String,
    email:String,
    pass:String
})


const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}