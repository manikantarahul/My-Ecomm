const express=require("express")
const cors=require("cors")
const port=1459
const app=express()
const userroute=require("./routes/userRoute")
app.use(cors())
app.use(express.json())

app.use("/api/user",userroute)
app.listen(port,()=>{
    console.log("server started")
})