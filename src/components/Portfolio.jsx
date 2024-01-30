import React from 'react';
import bg from '../img/crypton.png';
import bgg from '../img/blog.png';
import bggg from '../img/shop.png';
import bgggg from '../img/tiktok.png'
const Portfolio = () => {
  return (
    <div class="portfolio">
        <div class="container">
            <h2 class="h2">Portfolio
            </h2>
            <div class="portfolio-wrapper">
                <div class="portfolio-item">
                    <div class="portfolio-bubbles">
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                    </div>
                    <div class="portfolio-left">
                        <h3 class="portfolio-heading">Crypto Currency Website</h3>
                        <div class="portfolio-tags">
                            <div class="tag">
                                React
                            </div>
                            <div class="tag">
                                Redux
                            </div>
                            <div class="tag">
                                Rapidapi
                            </div>
                            
                        </div>
                        <p class="portfolio-descr"></p>
                        <a href='https://crypton-tommy.vercel.app/' class="btn btn--secondary">View Website</a>
                    </div>
                    <div class="portfolio-right img">
                        <img src={bg} alt=""/>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-bubbles">
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                    </div>
                    <div class="portfolio-left"><h3 class="portfolio-heading">Blog Website</h3>
                        <div class="portfolio-tags">
                            <div class="tag">
                                Node.js
                            </div>
                            <div class="tag">
                                MangoDB
                            </div><div class="tag">
                                Scss
                            </div>
                            <div class="tag">
                                Redux
                            </div>
                            <div class="tag">
                                Express
                            </div>
                        </div>
                        {/* <p class="portfolio-descr">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
                        <a href='https://blog-front-rouge.vercel.app/' class="btn btn--secondary">View Website</a>
                   
                </div>
                <div class="portfolio-right img">
                    <img src={bgg} alt=""/>
                </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-bubbles">
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                    </div>
                    <div class="portfolio-left"><h3 class="portfolio-heading">Online store</h3>
                        <div class="portfolio-tags">
                            <div class="tag">
                                Next.js
                            </div>
                            <div class="tag">
                                Sanity
                            </div>
                           
                        </div>
                        {/* <p class=" portfolio-descr">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
                        <a class="btn btn--secondary">View Website</a>
                    
                </div>
                <div class="portfolio-right img">
                    <img src={bggg} alt=""/>
                </div>
            </div>
            <div class="portfolio-item">
                    <div class="portfolio-bubbles">
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                    </div>
                    <div class="portfolio-left"><h3 class="portfolio-heading">Tiktik Website</h3>
                        <div class="portfolio-tags">
                            <div class="tag">
                                React
                            </div>
                            <div class="tag">
                                Sanity
                            </div>
                            <div class="tag">
                                TypeScript
                            </div>
                            <div class="tag">
                                Tailwind
                            </div>
                            <div class="tag">
                                Zustand
                            </div>
                        </div>
                        {/* <p class="portfolio-descr">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
                        <a href='https://blog-front-rouge.vercel.app/' class="btn btn--secondary">View Website</a>
                   
                </div>
                <div class="portfolio-right img">
                    <img src={bgggg} alt=""/>
                </div>
                </div>
        </div>
       </div>
       </div>
  )
}

export default Portfolio