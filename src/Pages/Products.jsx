import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import axios from 'axios'
// card css
import './productcard.css';

// swiper links
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaShoppingCart, FaArrowRight, FaArrowLeft } from 'react-icons/fa'

// ------------------------------------------------------------------------------

const Products = () => {

  const APIURL = 'https://fakestoreapi.com/products'  // api

  const [products, setProduct] = useState([])


  useEffect(() => {
    fetchProducts()
  }, [])

  // fetching datas from api
  const fetchProducts = async () => {
    try {
      const res = await axios.get(APIURL)
      // console.log(res.data)
      setProduct(res.data)
    }
    catch (error) {
      console.log("Cannot fetch data...", error)
    }
  }


  return (
    <main className="l-main1" style={{ margin: '50px' }}>
      <p className="subtitle" style={{ color: 'black', fontSize: '30px', fontWeight: '700', textAlign: 'center' }}><span >Other Products</span></p>
      <br /><br />
      {products.length > 0 && (
        // react swiper slider
        <Swiper
          //slider contents 
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={4}
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          initialSlide={0}
          loop={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            slideShadows: false
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3
            },
            1700: {
              slidesPerView: 5
            }
          }}
          className="swiper_container"
        >
          {/* product cards starts */}
          <section className="accessory section bd-container" id="accessory">
            <div className="accessory__container bd-grid"  >
            {/* for displaying products */}
              {products.map(product => (

                <SwiperSlide >
                  <div className="accessory__content" key={product.id}>
                    <img src={product.image} alt="" className="accessory__img" />
                    <h3 className="accessory__title">{product.title.substring(0, 25)}</h3>
                    <span className="accessory__category">{product.category}</span>
                    <span><Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly /><small>({product.rating.count})</small></span>
                    <span className="accessory__preci">${product.price}</span>
                    <a href="#" className="button accessory__button">
                      <FaShoppingCart />
                    </a>
                  </div>
                </SwiperSlide>

              ))}

            </div>
          </section>
          <br />
          <br />
          <br />
          <div className="slider-controler">
                {/* carousel navigation arrows */}
            <div className="swiper-button-prev slider-arrow">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaArrowRight />
            </div>
                {/* carousel pagination dots */}
            <div className="swiper-pagination" ></div>
          </div>
        </Swiper>
      )}
    </main>
  )
              }

export default Products

