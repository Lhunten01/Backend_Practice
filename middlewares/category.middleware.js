const category_model=require("../models/category.model")
const secret=require("../config/secret.configs")
const userModel = require("../models/user.model")
const verifyCategoryBody=async (req,res,next)=>
{
   try{ if(!req.body.name)
    {
        return res.status(500).send({message:"please enter the name "})
    }
    const data=await category_model.findOne({name:req.body.name})
    if(data)
    {
        return res.status(200).send({message:"category already exist"})
    }
    if(!req.body.description)
    {
        return res.status(500).send({message:"please enter the description"})
    }
    if(!req.body.token)
    {
        return res.status(500).send({message:"you are not authorized"})
    }  
       jwt.verify(token,secret.secretKey,async(err,decoded)=>
    {
      if(err)
    {return res.status(500).send({message:"the errr",err})}
     const user=await userModel.findOne({userId:decoded.userId})
      if(!user)
      {
        return res.status(400).send({message:"not exist"})
      }
      if(user.userType!="administrator")
      {
        return res.status(400).send({message:"you are not authorised to add"})
      }
    }

)
    next()
}
catch(err)
{
    console.log("error in craeting the category")
}
}
module.exports={
    verifyCategoryBody:verifyCategoryBody
}