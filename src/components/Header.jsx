import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import { TbHexagonLetterT } from "react-icons/tb";



const Header = () => {
  return (
    <header className="header"> 
    <div className="container">   
         <div  className="header-wrapper">
        <div className="header-logo">
            <a href="/"><TbHexagonLetterT className='iconLet' /></a>
        </div>
       <nav className="navigation">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='aboutme'>About me</Link></li>
                <li> <Link to='/specs'>Skills</Link></li>
                {/* <li><Link to='/portfolio'>Portfolio</Link></li> */}
                <li><Link to='/portfolioItem'>Portfolio</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                {/* <li><Link to='/contact'>Contact</Link></li> */}
            </ul>  
        
       
       </nav>
       <button className="btn btn--primary">
        <Link to='/contact'>Contact</Link>
       <GoArrowRight className='Icon-arrow' />
    </button>
        </div>
    </div>

</header>
  )
}

export default Header