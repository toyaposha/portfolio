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
import jsPDF from 'jspdf';
import Logo from '../img/Resume.png'



const Info = () => {
    const pdfGenerate =()=>{
        let doc = new jsPDF('landscape','px','a4','false');
        doc.addImage(Logo,'PNG',140,1,350,450);
        doc.text(100,410,'');
        doc.save('Resume.pdf')
       }
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
                    
                <div > <a onClick={pdfGenerate}>Downloand my resume <FaCloudDownloadAlt  className='icon-footer-buttons' /></a> 
           </div> 
                  
                    
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