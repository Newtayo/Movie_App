import React from 'react'
import '../style/footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";
const Footer = () => {
  return (
    <footer className='social-media'>
        <div className='icon'>
            <ImFacebook2 size={20}/>
            <FaInstagram size={20}/>
            < ImTwitter size={20}/>
            < FaYoutube size={20} />
        </div>
        <div className='icons'>
            <p>Conditions of Use</p>
             <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <p> &#169; MovieBox by Akande Omotayo </p>
    </footer>
  ) 
}

export default Footer