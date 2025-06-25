const express=require("express")
require('dotenv').config();
const cors=require("cors")
const port=process.env.PORT||1459
const app=express()
const userroute=require("./routes/userRoute")
app.use(cors())
app.use(express.json())

app.use("/api/user",userroute)
app.get('/', (req, res) => {
    res.send('Hello from backend');
  });
  
app.listen(port,()=>{
    console.log("server started")
})