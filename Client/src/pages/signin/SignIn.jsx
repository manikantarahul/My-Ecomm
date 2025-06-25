import { useState,useEffect } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
const SignIn = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://my-ecomm.onrender.com/api/user/signin", { email, password }).then((resp) => {
      if (resp.data.ok) {
        toast("Login successful", {
          style: {
            backgroundColor: 'green',
            color: 'white',
            fontWeight: "bold",
            fontFamily: "cursive"
          },
        }), setTimeout(() => {
          navigate("/Home")
        }, 2000
        )
        console.log(resp.data)
        localStorage.setItem("token", resp.data.result)
      } else {
        toast("User Doesn't Exists", {
          style: {
            backgroundColor: 'red',
            color: 'white',
            fontWeight: "bold",
            fontFamily: "cursive"
          },
        })
      }
    }).catch((error) => {
      console.log(error)
      alert("something went wrong")
    })

  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast("Logged out successfully", { style: { backgroundColor: "red", color: "white" } });
    navigate("/signin");
  };


  return (
    <div>
         {isLoggedIn && (
      <h2 style={{ 
        color: "green", 
        textAlign: "center", 
        marginTop: "20px", 
        fontFamily: "Segoe UI", 
        fontSize: "30px",
        fontWeight:"bold" 
      }}>
        ✅ You are logged in Tap Below to Logout
      </h2>
    )}
    <div className="login-container">
      
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoggedIn}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoggedIn}
            style={{ width: "100%", paddingRight: "40px" }}
          />
 
             {!isLoggedIn ? (
          <button type="submit">Login</button>
        ) : (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        )}
        {!isLoggedIn && (
          <a
            onClick={() => navigate("/signup")}
            style={{
              textDecoration: "none",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            Create an Account
          </a>
        )}
        </form>
        

      
        
    </div>
    </div>
  );
};

export default SignIn;
