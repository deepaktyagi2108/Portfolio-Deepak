import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact">
   <>
   <div className="container contact">
    <h1>Connect With Me</h1>
    <div className="contact-icon"
     data-aos="zoom-in-up"
    data-aos-duration="1000"
    >
  <a href='https://www.linkedin.com/in/deepak-tyagi-956523262/' blank="_blank" className="items">
  <CiLinkedin className='icons'/>
 
  </a>
  <a href='https://leetcode.com/u/deepaktyagi_2108/'target="_blank" className="items">
  <SiLeetcode className='icons'/>
  </a>
  <a  href='https://github.com/deepaktyagi2108' target="_blank"className="items">
  <FaGithub className='icons'/>
  </a>
  <a  href='mailto:deepaktyagi2108@hotmail.com' target="_blank"className="items">
  <HiOutlineMail className='icons'/>
  </a>
    </div>
   </div>
   </>
   </section>
  )
}

export default Contact