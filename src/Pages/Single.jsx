import React, { useState, useEffect } from 'react'
import './single.css'
import axios from 'axios'
import { Rating } from '@mui/material';



const Single = () => {

  const [data, setProduct] = useState(0);

  //Single product fetching call
  useEffect(() => {
    const fetchData = async (productId) => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log('Error occured', error)
      }
    };

    fetchData(7);
  }, []);


  return (
    // single product section
    <main className="l-main">
      <section className="home" id="home" >
        <div className="home__container bd-container bd-grid" key={data.id}>

          <div className="home__img">
            <img src={data.image} alt="product_image" />
          </div>

          <div className="home__data">
            <h1 className="home__title">{data.title}</h1>
            <p style={{ fontSize: '24px', fontWeight: '600' }}>${data.price}</p>
            <br />
            <p className="home__description">{data.description}</p>

            <a href="#" className="button">Add to cart</a>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Single