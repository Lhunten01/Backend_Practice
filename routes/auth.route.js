const authController=require("../controller/auth.controller")
const authMW=require("../middlewares/auth.middleware")
module.exports=(app)=>
{ 
 app.post("/ecom/api/v1/auth/signup",[authMW.verifySignUpBody],authController.signup);
 app.post("/ecom/api/v1/auth/signin",[authMW.verifySignIn],authController.signin);
}