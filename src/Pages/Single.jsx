import React, { useState, useEffect } from 'react'
import './single.css'
import axios from 'axios'
import { Rating } from '@mui/material';



const Single = () => {

  const [product, setProduct] = useState(null);
  const productId = 7

  //Single product fetching call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log('Error occured', error)
      }
    };

    fetchData();
  }, [productId]);


  return (
    // single product section
    <main className="l-main">
      <section className="home" id="home" >
        {product ? (
          <div className="home__container bd-container bd-grid" key={product.id}>

          <div className="home__img">
            <img src={product.image} alt="product_image" />
          </div>

          <div className="home__data">
            <h1 className="home__title">{product.title}</h1>
            <p style={{ fontSize: '24px', fontWeight: '600', color:'#5B5757' }}>${product.price}</p>
      
            <span><Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly /></span>
            <p className="home__description">{product.description}</p>

            <a href="#" className="button">Add to cart</a>
          </div>
        </div>
        ) : 'loading...'}
        
      </section>
    </main>

  )
}

export default Single