import React from 'react';
import Avat from '../img/avat-2.png';
import { GoArrowRight } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";



const Info = () => {
    
  return (
    
    <div className="info">
        <div className='container'>
            <div className='info_wrapper'>
            <div className="bottom-left">
        <div className="img-and-name"> 
            <img src={Avat}  alt=""/>
            <h3>Let's build it together.</h3> 
                </div> 
                <div className="footer-buttons">
                    <div><a href="https://www.linkedin.com/in/altybayeva-tomiris-11202b2b0/">My Linkedin <FaLinkedin  className='icon-footer-buttons'/>
                </a></div>
                    
                <div>   <a href="https://vk.com/doc91474289_672157662?hash=LozjgcHKOVlXVGSm4Rc1SPcA7OLTHv2O5FnNwO9FOiX&dl=Aryj9XZYIDV4vEYWwu3z8UJUKwgSWhT1syuatdmkmKH">Downloand my resume <FaCloudDownloadAlt  className='icon-footer-buttons' />
            </a></div> 
                  
                    
                </div> 
    </div>
    <div className="bottom-right">
        <div className="footer-container-mini"> 
            <div className="footer-container-mini-in"> 
           <ul>
           
            <li><FaPhone  className='info-icon'/><h4>+77477151141</h4></li>
            <li><MdEmail className='info-icon'/><h4>toyaposha@mail.ru</h4></li>
            <li><FaLocationArrow className='info-icon' /><h4>Almaty,Kazahkstan</h4></li>
           </ul>
                {/* <h3>Try me out, risk free!</h3> 
                <p>Let's build something great together</p>  */}
            </div> 
         
            {/* <button className="btn btn--primary">Contact  <GoArrowRight className='Icon-arrow' /></button>  */}


        </div> 
    </div>

            </div>
    
        </div>
 
</div>
  )
}

export default Info