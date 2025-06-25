const express=require("express")
const jwt=require("jsonwebtoken")
const route=express.Router()
const createconnection=require("../config/connection")
const secret_Key="jnesjnsdjcsdfjnlnaslojbvkdjbcebvuivbeoficbdcubdbucwe"

route.post("/signin",async (req,res)=>{
    const user=req.body
    const Collection=await createconnection()

    Collection.findOne(user).then((data)=>{
       
        var token=jwt.sign(data,secret_Key)
        res.send({
            ok:true,
            message:"User Exist",
            result:token
        })
    }).catch((error)=>{
       
        res.send({
            ok:false,
            message:"User Doesn't Exist",
            result:null
        })
    })
})   
// http://localhost:1459/api/user/signin
route.post("/signup",async (req,res)=>{
    const {firstName,lastName,email,phone,gender,password}=req.body
    try{
        const userColl=await createconnection()
        // const hashedPassword=await bcrypt.hash(password,10)
        const existingUser=await userColl.insertOne(
            {firstName,
            lastName,
            email,
            phone,
            gender,
            password
        })
        res.json({
            ok:true,
            result:"User created sucessfully"
        })
        
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            message:"Internal Server error"
        })
    }
})
// http://localhost:1459/api/user/signup

// route.get("/getusers",async (req,res)=>{
//     const coll=await createconnection()
//     var resp=await coll.find().toArray()
//     if(!resp){
//         res.send({
//             ok:false,
//             result:"Failed to get user"
//         })
//     }else{
//         res.send({
//             ok:true,
//             result:resp
//         })
//     }
    

// })
// http://localhost:1459/api/user/getusers

route.get("/getLoggedUser",(req,res)=>{
  
    if(req.headers['authorization']===undefined){
        res.send({
            ok:"false",
            result:"Token is missing"
        })
    }else{
        var token=req.headers.authorization.slice(7)
        jwt.verify(token,secret_Key,(error,data)=>{
            if(error){
                res.send({
                    ok:false,
                    result:"Token is invalid"
                })
            }else{
                res.send({
                    ok:true,
                    data:data
                })
            }
        })
    }
})
// http://localhost:1459/api/user/getLoggedUser
module.exports=route