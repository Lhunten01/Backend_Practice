const categoryController=require("../controller/category.controller")
const categoryMW=require("../middlewares/category.middleware")
module.exports=(app)=>
{
    app.post("/ecom/api/v1/category/getcategory",[categoryMW.verifyCategoryBody],categoryController.getCategory)
}