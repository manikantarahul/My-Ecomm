import axios from "axios";

export const getLoggedUser=async ()=>{
    try{
        const data= await axios.get("http://localhost:1459/api/user/getLoggedUser",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    return data
    }
    catch(error){

    }
}