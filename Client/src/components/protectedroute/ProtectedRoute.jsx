import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser } from '../products/services/user'
function ProtectedRoute({children}) {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token")){
            getLoggedUser().then((res)=>{
                console.log("then")
                console.log(res)

            }).catch((error)=>{
                console.log(error)

            })
        }else{
            navigate("/signin")
        }
    },[])
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute