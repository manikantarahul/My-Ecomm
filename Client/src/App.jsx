import "./App.css";
import { Toaster } from "react-hot-toast";
import Nav from "./components/nav/Nav";
// import Card from "./components/card/Card"
import Electronics from "./components/electronics/Electronics";
import Mens from "./components/mens/Mens";
import Womens from "./components/womens/Womens";
import Jewelery from "./components/jewelery/Jewelery";
import Home from "./components/home/Home";
import SignUp from "./pages/signup/SignUp";
import SignIn from"./pages/signin/SignIn";
import ProductDetails from "./components/productdetails/ProductDetails";
import { Route ,Routes} from "react-router-dom";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
function App(){
  return(
    <div className="app">
       <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      <Nav/>
      
     <Routes>
     <Route path={"/"} element={<SignIn/>}/>
     
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
     <Route path="/electronics" element={<ProtectedRoute><Electronics/></ProtectedRoute>}/>
     <Route path="/jewelery" element={<ProtectedRoute><Jewelery/></ProtectedRoute>}/>
     <Route path="/mens" element={<ProtectedRoute><Mens/></ProtectedRoute>}/>
     <Route path="/womens" element={<ProtectedRoute><Womens/></ProtectedRoute>}/>
    
     <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>}/>

     <Route path="/productdetails/:id" element={<ProductDetails />} />

     </Routes>
     

    </div>
  )
}
export default App;