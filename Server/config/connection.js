const {MongoClient}=require("mongodb")
require('dotenv').config();
const url=process.env.MONGO_URL
const client=new MongoClient(url)

async function userconnection(){
     await client.connect()
     const db=client.db("myEcommDB")
     const usercoll=db.collection("users")
     return usercoll
}
module.exports=userconnection;