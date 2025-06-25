import React from 'react'
import Card from "../card/Card"
import "./Products.css"
import { useEffect, useState } from "react"
import { getProductsData } from "./services/ProductServices"
// import { Carousel } from 'react-bootstrap'

function Products({ url }) {
  const [products, setProducts] = useState([]);
  useEffect(() => { getProductsData(setProducts, url) }, []);


  return (
    <div>
      <div class="carousel">
        <div class="carousel-track">
          <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?semt=ais_hybrid&w=740" alt="Slide 1" className='carousel-image' width={100} />
          <img src="https://cdn.shopify.com/s/files/1/0817/7988/4088/articles/fashion-ecommerce.jpg?v=1738095976&width=1396&originalWidth=1848&originalHeight=782" alt="Slide 2" className='carousel-image' />
          <img src="https://t3.ftcdn.net/jpg/13/40/65/42/360_F_1340654278_LSRmRoruyicV32McdOca4ENNC0Q7UNQU.jpg" alt="Slide 3" className='carousel-image' />
        </div>
      </div>

      <div className="productsDataContainer">
        {products.map((productsData) => {
          return <Card data={productsData} />
        })}
      </div>
    </div>
  )
}

export default Products