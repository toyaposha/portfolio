import React from 'react';
import avat from '../img/avat-2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import PsychoonlogyRoundedIc from '@mui/icons-material/PsychologyRounded';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';

const Reviews = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <div className="reviews">
    <div className="container">
        <div className="reviews-title">
            <h3>More About Me</h3>
        </div>
        <div className="reviews-wrapper">
            <div className="reviews-slider">
                <Slider {...settings}>
                <div className="reviews-slide-item  swiper-slide">
                    <div className="reviews-slide-item-inner">
                        <PsychoonlogyRoundedIc  style={{ fontSize: 100, color:'#168798'}} className="reviews-slide-item-image" />
                        {/* <img src={avat} alt="" className="reviews-slide-item-image"/> */}
                        <div className="reviews-slide-item-info">
                            <p className="txt">I am a disciplined individual with a strong analytical mind and excellent organizational skills. I am adept at meeting deadlines and thrive on finding effective solutions to challenges. </p>
                            <span className="name">Tomiris</span><span className="stage">Front-End Developer</span></div>
                    </div>
                </div>
                <div className="reviews-slide-item swiper-slide">
                    <div className="reviews-slide-item-inner">
                    <LightbulbRoundedIcon style={{ fontSize: 100, color:'#168798'}}  className="reviews-slide-item-image"/>
                        {/* <img src={avat} alt="" className="reviews-slide-item-image"/> */}
                        <div className="reviews-slide-item-info">
                            <p className="txt">My strengths lie in my ability to think and act creatively, complemented by well-developed communication skills. I excel in being flexible and adapting to various circumstances. </p>
                            <span className="name">Tomiris</span><span className="stage">Front-End Developer</span></div>
                    </div>
                </div>
                <div className="reviews-slide-item swiper-slide">
                    <div className="reviews-slide-item-inner">
                        <SpeedRoundedIcon style={{ fontSize: 100, color:'#168798'}}  className="reviews-slide-item-image"/>
                        {/* <img src={avat} alt="" className="reviews-slide-item-image"/> */}
                        <div className="reviews-slide-item-info">
                            <p className="txt">While I may have limited experience in IT, I am a fast learner, particularly when I am enthusiastic about the job. Mastering my IT skills will bring me only positive perspectives.</p>
                            <span className="name">Tomiris</span><span className="stage">Front-End Developer</span></div>
                    </div>
                </div>
                <div className="reviews-slide-item swiper-slide">
                    <div className="reviews-slide-item-inner">
                        <LanguageRoundedIcon style={{ fontSize: 100, color:'#168798'}}  className="reviews-slide-item-image" />
                        {/* <img src={avat} alt="" className="reviews-slide-item-image"/> */}
                        <div className="reviews-slide-item-info">
                            <p className="txt">I am fluent in Kazakh and Russian as native languages. Additionally, I have an intermediate level (B1) in English, upper-intermediate proficiency in Japanese, and elementary level in Korean. </p>
                            <span className="name">Tomiris</span><span className="stage">Front-End Developer</span></div>
                    </div>
                </div>
                <div className="reviews-slide-item swiper-slide">
                    <div className="reviews-slide-item-inner">
                    <SportsGymnasticsRoundedIcon style={{ fontSize: 100, color:'#168798'}}  className="reviews-slide-item-image"/>
                        {/* <img src={avat} alt="" className="reviews-slide-item-image"/> */}
                        <div className="reviews-slide-item-info">
                            <p className="txt">I am passionate about dancing and singing, hobbies that not only help me relax but also inspire me with new ideas. They have been a source of inspiration throughout my life. </p>
                            <span className="name">Tomiris</span><span className="stage">Front-End Developer</span></div>
                    </div>
                </div>
                <div className="reviews-slide-item swiper-slide">
                    <div className="reviews-slide-item-inner">
                    <PersonRemoveRoundedIcon style={{ fontSize: 100, color:'#168798'}}  className="reviews-slide-item-image"/>
                        {/* <img src={avat} alt="" className="reviews-slide-item-image"/> */}
                        <div className="reviews-slide-item-info">
                            <p className="txt">Although it's a common answer, my weakness is perfectionism. As a Web Developer, particularly in Front-End development, attention to detail is crucial. I tend to be meticulous in identifying and correcting mistakes and errors. However, I've learned that finding the right balance is essential for delivering satisfactory results without becoming overly frustrated.
</p>
                            <span className="name">Tomiris</span><span className="stage">Front-End Developer</span></div>
                    </div>
                </div>
                </Slider>
            </div>
            {/* <div className="swiper-button-prev">
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_484)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0939 4.49582H3.50454L5.79326 2.20711C6.18378 1.81658 6.18378 1.18342 5.79326 0.792893C5.40273 0.402369 4.76957 0.402369 4.37904 0.792894L0.386643 4.7853C0.190942 4.981 0.0933112 5.23763 0.0937515 5.49413C0.0933205 5.75061 0.190951 6.00723 0.386643 6.20293L4.38661 10.2029C4.77714 10.5934 5.4103 10.5934 5.80083 10.2029C6.19135 9.81237 6.19135 9.17921 5.80083 8.78868L3.50796 6.49582H15.0939C15.6462 6.49582 16.0939 6.0481 16.0939 5.49582C16.0939 4.94354 15.6462 4.49582 15.0939 4.49582Z" fill="#292D34"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_484">
                    <rect width="16" height="10" fill="white" transform="translate(0.09375 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    
            </div> */}
            {/* <div className="swiper-button-next"><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.54251 4.22839H12.0782L9.9976 2.14774C9.64257 1.79272 9.64257 1.21711 9.9976 0.862092C10.3526 0.507069 10.9282 0.50707 11.2832 0.862092L14.9127 4.49154C15.0906 4.66946 15.1793 4.90276 15.179 5.13594C15.1793 5.36911 15.0906 5.6024 14.9127 5.78031L11.2763 9.41664C10.9213 9.77167 10.3457 9.77167 9.99069 9.41664C9.63569 9.06162 9.63569 8.48602 9.99069 8.13099L12.0751 6.04657H1.54251C1.04044 6.04657 0.633423 5.63955 0.633423 5.13748C0.633423 4.6354 1.04044 4.22839 1.54251 4.22839Z" fill="#292D34"/>
                </svg>
                </div> */}
        </div>
       
    </div>
      
    
   
</div>
  )
}

export default Reviews