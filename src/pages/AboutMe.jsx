import React from 'react';
import { Link } from 'react-router-dom';
import Avat from '../img/avat-2.png';
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";



const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='container'>
        <div className='aboutme-wrapper'>
          
             <div className='left-container'>
             <div className='left-img'> <img src={Avat}  alt=""/></div> 
             <div className='left-my'>
             <h4><span>Yahoo,</span>I'm Tomiris</h4>
              <p>I've been in IT for like 4 months. I still want to learn a lot. But this is just the beginning of my battle</p>
              <div className='social'>
              <FaLocationArrow className='locate'/><h5>Almaty,Kazahkstan</h5>
              </div>
             </div>
             
             </div>
             <div className='right-container'>
              <h3>About Me</h3>
              <p>I am 28 years old. My specialty, which I graduated from at the university international relations.  I lived in Japan for one year. there I studied and worked part-time. Having arrived in Kazakhstan, I decided to study IT. and the choice fell on front-end, after trying it I liked it. If I’m a novice specialist, don’t count me out right away. I'm still learning...and I'm not going to give up!</p>
              <h4><Link to='/more'>More About Me  <GoArrowRight className='Icon-arrow' /></Link></h4>
              
              <button className="btn btn--primary"><a href="https://vk.com/doc91474289_672183075?hash=wWvDctZm2SHJOom6MZLYhMAZJNaZF2Zjs7VhMhDvSLo&dl=FQOKS3iI9C2IdR3fQ2ugzt0mRoJ6A4ovbNsqBxfCOOD">Resume</a>
       <FaArrowAltCircleDown className='Icon-arrow' /></button>
       
             </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe