const express=require("express")
const { auth } = require("../middleware/authmiddleware");
const { BlogModel } = require("../models/blogs.model");

const blogRouter=express.Router();
blogRouter.use(express.json())

blogRouter.get("/api/blogs",auth,async(req,res)=>{
    try {
        const blog=await BlogModel.find()
    res.status(200).send({msg:blog})
    } catch (error) {
        res.status(400).send({error:error.message})
    }
    
})

blogRouter.post("/api/blogs",auth,async(req,res)=>{
    const {username,title,content,category,likes,date,comments}=req.body;
    try {
        const blog=await BlogModel({username,title,content,category,likes,date,comments})
        await blog.save();
        res.status(200).send({msg:"One Blog is added"})
    } catch (error) {
        res.status(404).send({msg:error.message})
    }
})

blogRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await BlogModel.findIdAndUpdate(id,req.body)
        res.status(200).send({msg:"New Blog has Updated..!!!"})
    } catch (error) {
        res.status(404).send({error:error.message})
    }
})


blogRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await BlogModel.findIdAndDelete(id,req.body)
        res.status(200).send({msg:"New Blog has deleted..!!!"})
    } catch (error) {
        res.status(404).send({error:error.message})
    }
})




module.exports={
    blogRouter
}