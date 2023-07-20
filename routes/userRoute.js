const express =require('express')
const route=express.Router()
const {getUsers,addUser,updateUser,deleteUser}=require("../controllers/userControllers")

route.get("/",getUsers)
route.post("/post",addUser)
route.put("/put/:id",updateUser)
route.delete("/delete/:id",deleteUser)


module.exports=route