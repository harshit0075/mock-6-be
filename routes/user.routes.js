const express=require("express");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { UserModel } = require("../models/user.model");

const UseRouter=express.Router();
UseRouter.use(express.json())

UseRouter.post("/Signup",async(req,res)=>{
    const {userName,avtar,email,pass}=req.body;
    try {
        const user=await UserModel.findOne({email});
        if(user){
            res.status(200).send({msg:"Already Logged in"})
        }else{
        bcrypt.hash(pass,5,async(err,hash)=>{
            const user=await UserModel({email,pass:hash})
            await user.save();
            res.status(200).send({msg:"Welcome to the Login Page....!!!"})
        })
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

UseRouter.post("/signin",async(req,res)=>{
    const {email,pass}=req.body;
    try {
        const user=await UserModel.findOne({email});
        if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                if(result){
                    const token=jwt.sign({userId:user._id},"blog")
                    res.status(200).send({msg:"Welcome to the blog page...!!!"})
                }else{
                    res.send(200).send({msg:"Please check your credentialss..???"})
                }
            })
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


module.exports={
    UseRouter
}