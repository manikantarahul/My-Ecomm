
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from "../home/Home";


import "./ProductDetails.css"
function ProductDetails() {
   
   
    const [product, setProduct] = useState({
        id: 0,
        category: "",
        image: "",
        title: "",
        price: 0,
        description: "",
        rating: { rate: 0 }

    })
  
    var { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then((res) => {
            setProduct(res.data)
        }).catch((error) => {
            alert("something went wrong")
        })
    }, [])
    return (
        <div className="productDetailsContainer">
            <div className="left">
                <img src={product.image} alt="" width={"100%"} height={400} />
            </div>
            <div className="right">
                <dl>
                    <dt><b>Product ID</b></dt>
                    <dd><h6 >{product.id}</h6></dd>
                    <dt><b>Product Name</b></dt>
                    <dd><h6 className="h6">{product.title}</h6 ></dd>
                    <dt><b>Price</b></dt>
                    <dd><h6 className="h6">${product.price}</h6 ></dd>
                    <dt><b>Category</b></dt>
                    <dd><h6 className="h6">{product.category}</h6></dd>
                    <dt><b>Descripiton</b></dt>
                    <dd><h6 className="h6">{product.description}</h6></dd>
                    <dt><b>Rating</b></dt>
                    <dd><h6 className="h6">{product.rating.rate}</h6></dd>


                </dl>

                <button className="btn btn-outline-primary mx-2">Add to Cart</button>
                

            </div>



        </div>
    )
}

export default ProductDetails