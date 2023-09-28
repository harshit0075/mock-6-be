const mongoose=require("mongoose");

const blogSchema=mongoose.Schema({
    username:String,
    title:String,
    content:String,
    category:String,
    likes:Number,
    date:Date,
    comments:String
})

const BlogModel=mongoose.model('blog',blogSchema)

module.exports={
    BlogModel
}