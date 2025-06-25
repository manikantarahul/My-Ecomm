import { useState } from 'react'
import "./SignUp.css"
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        password:""
    });
    const navigate=useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const getNewUser = (e) => {
        e.preventDefault()


        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.password
        ) {
            toast("Please fill in all required fields", {
                style: {
                    background: 'red',
                    color: 'white',
                    fontWeight: "bold",
                    fontFamily: "cursive"
                }
            });
            
        }else{

        axios.post("http://localhost:1459/api/user/signup", formData)
      .then((resp) => {
        if (resp.status === 200 || resp.status === 201)  {
            toast("Account Created Sucessfully",{
                style: {
                    background: 'green',
                    color: 'white',
                    fontWeight:"bold",
                    fontFamily:"cursive"
                  },
            })
            setTimeout(()=>{
                navigate("/signin")
            },2000
            )
        }else{
            toast("Failed to Create Account",{
                style: {
                  background: 'red',
                  color: 'white',
                  fontWeight:"bold",
                  fontFamily:"cursive"
                },
              })

        }
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          gender: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
    };
}
    return (
        <div className='main-signup-container'>
            <div className="signup-container">
                <form className="signup-form" >
                    <h2>Signup</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select> 
                    </div> <br />
                    <button  onClick={getNewUser}>Sign Up</button> <br /> <br />
                </form>
            </div>
           
        </div>
    )
}

export default SignUp