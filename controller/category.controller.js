const category=require("../models/category.model")

module.exports.getCategory=async (req,res)=>
{
     const categoryObj={
        name:req.body.name,
        description:req.body.description
     }
     try{
     const dataEnterd=await category.create(categoryObj);
     res.status(200).send(dataEnterd)
     }
     catch(err)
     {
        console.log("the error in creating the category: ",err)
        res.status(500).send({message:"problem in category creation"})
     }
}