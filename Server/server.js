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
  userconnection()
  .then(() => {
    console.log("MongoDB connected successfully ✅");
    app.listen(port, () => {
      console.log(`Server started on port ${port} 🚀`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB ❌", err);
  });
app.listen(port,()=>{
    console.log("server started")
})