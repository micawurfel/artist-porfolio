import React from 'react'
import { RiInstagramLine, } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

export default function SocialMedia(props) {
  return (
    <div className='div--social-media'>
        <a className='div__a' href="https://www.instagram.com/alrescatedeobras" target="_blank"><i className='div__i'><RiInstagramLine/></i>{props.git}</a>
        <a className='div__a' href="mailto:info@mailenmorale.com" target="_blank"><i className='div__i'><FiMail/></i>{props.email}</a>
    </div>
  )
}
