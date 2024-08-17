const user_model=require("../models/user.model")

const verifySignUpBody=async (req,res,next)=>
{     console.log(req.body)
   try{
          if (!req.body.name) {
            return res.status(400).send({ message: "Name is not present" });
        }
        if(!req.body.email)
            {  
                return res.status(400).send({message:"Hi email is not present"})
            }
        if(!req.body.userId)
        {  
            return res.status(400).send({message:"Hi name is not present"})
        }
        if (!req.body.password) {
            throw new Error("Password is required but was not provided.");
        }
        const data=await user_model.findOne({userId:req.body.userId})
        if(data)
        {
            return res.status(400).send({message:"Hi userId is already exict"})
        }
    next()
   }
   catch(error)
{
    console.log("Error while validating the request object", error)
    res.status(500).send({
        message :"Error while validating the request body"
    })
}
}
const verifySignIn=async (req,res,next)=>
{
    if(!req.body.userId)
        {  
            return res.status(400).send({message:"Hi name is not present"})
        }
        if (!req.body.password) {
            return  res.status(400).send({message:"Password is required but was not provided."});
        }
        next()
}
module.exports={
    verifySignUpBody:verifySignUpBody,
    verifySignIn:verifySignIn
}
