const express=require("express");
const { UseRouter } = require("./routes/user.routes");
const { connection } = require("./db");
const { blogRouter } = require("./routes/blog.routes");
const cors=require('cors')

const app=express();
app.use(cors())
app.use(express.json())
app.use("/user",UseRouter)
app.use("/blog",blogRouter)



app.get("/",(req,res)=>{
    res.send("Welcome to Blog Page")
})


app.listen(1010,async(req,res)=>{
    
    try {
      await connection
        console.log("MonogoDg Connected");
        console.log('server is running on port 1010');
    } catch (error) {
        console.log(error);
    }
})