import React from 'react';
import crypton from '../img/crypton.png';
import blog from '../img/blog.png';
import tiktok from '../img/tiktok.png';
import shop from '../img/shop.png';

const PortfolioItem = () => {
  return (
    <div className='portfolioitem'>
       <div className='container'>
          <div className='portfolioitem-wrapper'>
                <div className='portfolioitem-h2'> <h2>Portfolio</h2></div>
                <div className='portfolioitem-website'>
                   <a><img src={crypton}/><p><a href='https://crypton-tommy.vercel.app/' className="btn btn-view">View Website</a></p></a>
                   
                   <a><img src={blog}/><p><a href='https://blog-front-rouge.vercel.app/' className="btn btn-view">View Website</a></p></a>
                   
                   <a><img src={tiktok}  /> <p><a href='https://blog-front-rouge.vercel.app/' className="btn  btn-view">View Website</a></p></a>
                  
                   
                   <a><img src={shop}  /> <p><a href='https://blog-front-rouge.vercel.app/' className="btn btn-view">View Website</a></p></a>
                  
                </div>
          </div>
       </div>
    </div>
  )
}

export default PortfolioItem