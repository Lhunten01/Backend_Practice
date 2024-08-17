const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userSchema=require("../models/user.model")
module.exports.signup=async (req,res)=>
{ 
  const req_body=req.body
    const userObj=
    {
        name:req_body.name,
        userId:req_body.userId,
        email:req_body.email,
        userType : req_body.userType,
        password:bcrypt.hashSync(req_body.password,8)
    }
    
    try{
       const user_created=await userSchema.create(userObj);
       const res_obj = {
        name : user_created.name,
        userId : user_created.userId,
        email : user_created.email,
        userType : user_created.userType,
        createdAt : user_created.createdAt,
        updatedAt : user_created.updateAt
    }
    res.status(201).send(res_obj)
    }
    catch(err){
        console.log("Error while registering the user", err)
        res.status(500).send({
            message : "Some error happened while registering the user"
        })
}
}
module.exports.signin=async(req,res)=>
{
    
        const user=await userSchema.findOne({userId:req.body.userId})
        if(!user)
        {
          return res.status(500).send({message:"UserID not exist,please register first"})
        }
    
        const ispassword=bcrypt.compareSync(req.body.password,user.password)
        if(!ispassword)
        {
        return  res.status(200).send({message:"Successfuly signIn"})
        }
        const token=jwt.sign({id:user.userId},"thisji is mr setddsdf",{expiresIn:123})
        console.log(token)
   res.status(200).send({
       name:user.name,
       userId:user.userId,
       mail:user.email,
       userType:user.userType,
       userToken:token
      })
}

