import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div className='main'>
        <div className='icon fb'>
            <FaFacebookF className='fb-icon'/>
            <span>Facebook</span>
        </div>

        <div className='icon twi'>
            <FaTwitter className='twi-icon'/>
            <span>Twitter</span>
        </div>

        <div className='icon ins'>
            <FaInstagram className='ins-icon'/>
            <span>Instagram</span>
        </div>

        <div className='icon lin'>
            <FaLinkedinIn className='lin-icon'/>
            <span>LinkedIn</span>
        </div>

        <div className='icon yt'>
            <FaYoutube className='yt-icon'/>
            <span>YouTube</span>
        </div>

    </div>
  )
}

export default Footer