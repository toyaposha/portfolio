import React from 'react';
import { Link } from 'react-router-dom';
import Avat from '../img/avat-2.png';
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import jsPDF from 'jspdf';
import Logo from '../img/Resume.png'



const AboutMe = () => {
  const pdfGenerate =()=>{
    let doc = new jsPDF('landscape','px','a4','false');
    doc.addImage(Logo,'PNG',140,1,350,450);
    doc.text(100,410,'');
    doc.save('Resume.pdf')
   }
  return (
    <div className='aboutme'>
      <div className='container'>
        <div className='aboutme-wrapper'>
          
             <div className='left-container'>
             <div className='left-img'> <img src={Avat}  alt=""/></div> 
             <div className='left-my'>
             <h4><span>Hey,  </span>  
             I'm Tomiris</h4>
              <p>I have been in the IT field for 4 months, where I have discovered a completely new world of Information Technology. During my first course of studies, I learned new skills, such as HTML, CSS, SCSS, JavaScript, React, Next.js, Node.js, MangoDB. It hasn’t been easy for me, but this is just the beginning of my journey, and I am eager to expand my knowledge with additional competencies that will help me become a confident specialist.</p>
              <div className='social'>
              <FaLocationArrow className='locate'/><h5>Almaty,Kazahkstan</h5>
              </div>
             </div>
             
             </div>
             <div className='right-container'>
              <h3>About Me</h3>
              <p>My name is Tomiris, and I come from Almaty, Kazakhstan. My educational journey began in 2013 when I graduated from high school and entered university to study international relations. After graduating in 2017, I worked in various fields to save money for a childhood dream - visiting Japan.
</p><p>
In 2022, my dream came true, and I began learning the Japanese language while working part-time. One year of new experiences, friendships, and skills in Tokyo helped me to discover my true interests for my future journey. After this extraordinary year, I found a course that matched my needs and expectations, which I successfully completed. This is a new chapter for me, and I am eager to explore new opportunities for apprenticeship.
</p>
              <h4><Link to='/more'>More About Me  <GoArrowRight className='Icon-arrow' /></Link></h4>
              
              <button className="btn btn--primary" onClick={pdfGenerate} >Resume
       <FaArrowAltCircleDown className='Icon-arrow' /></button>
     
             </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe