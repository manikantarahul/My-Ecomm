import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate=useNavigate()
    return (
        <div id="homeheader">
            <section id="brand" class="myflex">
                <h1>My-Ecomm</h1>
            </section>
            <section id="links" class="myflex">
                <Link to="/home">🏠Home</Link>
                <Link to="/mens">👕Mens</Link>
                <Link to="/womens">👗Womens</Link>
                <Link to="/electronics">📱Electronics</Link>
                <Link to="/jewelery">💍Jewelery</Link>
            </section>
            <section id="logos" class="myflex">
                <a href="" className='bi bi-cart'></a>
                <a href="" className='bi bi-heart-fill'></a>
                <button ><a href=" " onClick={()=>{navigate("/signin")}}>Login</a></button>
            </section>


        </div>
    )
}

export default Nav