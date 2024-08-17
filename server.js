const express=require("express")
const mongoose=require("mongoose")
const server_config=require("./config/server.configs")
const db_config=require("./config/db.configs")
const userSchema=require("./models/user.model")
const bcrypt=require("bcryptjs")

const app=express()
app.use(express.json())
mongoose.connect(db_config.DB_url)

const db=mongoose.connection

db.on("error",()=>
{
    console.log("error")
})

db.once("open",()=>
{
    console.log("db connection successful")
    init()
})

async function init()
{
    
    try {
        const user_created= await userSchema.find({userType:"administrator"})
        if(user_created)
            {
                console.log(user_created)
                console.log(user_created.length)
                return
            }  
    }
    catch(error)
    {
        console.log("Error while reading the data", error)
    }
    try{
              const user= 
             {
                    name:"Tenzin",
                    userId:"Ten01",
                    email:"mytenzin@gmail.com",
                    userType:"administrator",
                    password: bcrypt.hashSync("mypassword",salt),
              }
              console.log(user)
              const data=await userSchema.create(user);
              console.log(data)    
    } catch (error) {
         console.log(error)
    }
   
}


require("./routes/auth.route")(app)
require("./routes/category.route")(app)
app.listen(server_config.port,()=>
{
    console.log("Server is connected",server_config.port);
})