const express=require("express")
const mongoose=require("mongoose")
const app=express()
const dotenv=require('dotenv')
dotenv.config({path:"./config/.env"})
app.use(express.json())
const port=process.env.PORT||4000
mongoose.connect(process.env.URL).then(console.log("db connected "))

app.use('/api', require('./routes/userRoute'))
app.listen(port,(err)=>{err? console.log(err) :console.log("Server is running in port:",port) })
