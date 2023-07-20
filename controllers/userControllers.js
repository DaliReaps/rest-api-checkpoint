const User=require('../models/userSchema')
//function to get all users in the database
const getUsers=async(req,res)=>{

    try {
        const users=await User.find()
        res.status(200).json({msg:"get all users",users:users})
    } catch (err) {
        res.status(500).json({msg:"something went wrong",err:err})
    }
}
//function to add a new user to the database
const addUser=async(req,res)=>{

    try {
        const newusers=new User(req.body)
        await newusers.save()
        res.status(201).json({msg:"new user added",newusers:newusers})
    } catch (err) {
        res.status(500).json({msg:"something went wrong",err:err})
    }
}
//function to update a user given by its id in the database
const updateUser=async(req,res)=>{

    try {
        const updateuser= await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
        res.status(200).json({msg:"user updated",updateuser:updateuser})
    } catch (err) {
        res.status(500).json({msg:"something went wrong",err:err})
    }
}
//function to delete a user given by its id in the database
const deleteUser=async(req,res)=>{

    try {
        const deleteduser= await User.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({msg:"user deleted",deleteduser:deleteduser})
    } catch (err) {
        res.status(500).json({msg:"something went wrong",err:err})
    }
}

module.exports  ={getUsers,addUser,updateUser,deleteUser}
