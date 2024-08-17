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
     },
     email:
     {
       type:String,
       required:true,
       unique:true,
       length:10
     },
     password:
     {
      type:String,
      required:true,
     },
     userType:{
        type:String,
        required:true,
        default:"user",
        enum:["administrator","user"]
     }
     
},{versionKey:false,timestamps:true})

module.exports=mongoose.model("User",userSchema);