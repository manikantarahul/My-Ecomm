const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

async function userconnection(){
     await client.connect()
     const db=client.db("dosthbookdb")
     const usercoll=db.collection("users")
     return usercoll
}
module.exports=userconnection;