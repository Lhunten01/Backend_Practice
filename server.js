const express=require("express")
const mongoose=require("mongoose")
const server_config=require("./config/server.configs")
const db_config=require("./config/db.configs")
const userSchema=require("./models/user.model")

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
        const data= await userSchema.find({user_type:"administrator"})
        if(!data)
            {
                console.log(data)
            }
            else
            {
              const user= 
             {
                    name:"Tenzin",
                    userId:"Ten01",
                    email:"mytenzin@gmail.com",
                    user_type:"administrator"
              }
              const data=await userSchema.create(user);
              console.log(data)
            }
        
    } catch (error) {
         console.log(error)
    }
   
}

require("./routes/auth.routes")(app)

app.listen(server_config.port,()=>
{
    console.log("Server is connected");
})