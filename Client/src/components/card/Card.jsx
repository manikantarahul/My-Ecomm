import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';
function Card({data}) {
    const{image,title,price,id}=data;
  return (
    <div className='container'>
        <img src={image} alt="" width={"100%"} height={200}/>
        <h4>{title.slice(0,15)}</h4>
        <p>${price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" ,}}>
          <Link to={`/productdetails/${id}`}>
          <button class="btn btn-outline-primary " style={{marginRight:5,padding:5}}>Product Details</button>
          </Link>
            <button class="btn btn-outline-success " >Add to cart</button>
            
        </div>
    </div>
  )
}

export default Card