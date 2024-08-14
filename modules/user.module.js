const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
     name:
     {
         type:String,
         required:true,  
     },
     userId:
     {
       type:String,
       required:true,
       unique:true
     },
     email:
     {
       type:String,
       required:true,
       unique:true,
       length:10
     },
     user_type:{
        type:String,
        required:true,
        enum:["administrator","user"]
     }
},{versionKey:false,timestamps:true})

module.exports=mongoose.model("User",userSchema);