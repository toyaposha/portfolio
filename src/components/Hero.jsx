import React from 'react';
import Avat from '../img/avat-2.png';
import AvatNew from '../img/IIphoto.png'
import cub from '../img/cub.svg';
import Lines from '../img/Lines.svg';
import BlueGradient from '../img/Blur Gradient.png';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";


const Hero = () => {
   

  return (
    <div class="hero"> 
       <div class="background-container">

<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div>
</div>
    <div class="container"> 
        <div class="hero-wrapper"> 
            <div class="hero-personal-info"  > 
     
                <div class="hero-personal-info-left"> 
                       <h1 class="h1"> HEY!<span class="bold"> I’m Tomiris,</span><br/><span class="bold">Web </span> Developer</h1>
                    <p>I'm a beginner Front-End Web Developer  </p> 
                    <div class="hero-social"> 
                    <a href="">
                        <IoLogoJavascript className='icon-hero'/>
                        </a>
                        <a href="">
                           <FaReact className='icon-hero' />
                        </a>
                        
                       <a href="">
                       <FaNode  className='icon-hero'/>
                        </a>
                       
                    </div> 
                    <div class="hero-blur">
                        <img src={BlueGradient} alt=""/>
                    </div>
                </div> 
                <div class="hero-personal-info-right"> 
                    <div class="img-wrap">  <img src={AvatNew}  /></div>
                    <img src={cub} alt="" class="patterns"/> 
                </div> 
                <div class="hero-lines">
                    <img src={Lines} alt=""/>
             </div>
             
            </div> 
             
        </div> 
    </div> 
</div> 
  )
}

export default Hero