const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
    const token=req.headers.authorization.splice(" ")||[];
    if(token){
        try{
        const decoded=jwt.verify(token,"blog");
        if(decoded){
            req.body.userId=decoded.userId;
            next();
        }else{
            res.json({msg:"please check it once....."})
        }
    }catch(err){
        res.json({msg:"in....!!"})
    }
}else{
res.json({msg:"Please login again...."})
}
}

module.exports={
    auth
}