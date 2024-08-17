const category_model=require("../models/category.model")
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