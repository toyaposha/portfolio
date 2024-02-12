import AboutMe from './pages/AboutMe';
import { FAQ,Footer,Header,Hero,Portfolio,Reviews,Specs,Info, PortfolioItem } from './components';
import './index.scss';
import {   Routes, Route,Link  } from 'react-router-dom';



function App() {
 
  return (
    <> 
  
    <div className='header'>
    <Header/>
    </div>
 
    <div>
   
    <Routes>
      
                <Route path='/' element={<Hero/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/specs' element={<Specs/>}/>
                {/* <Route path='/portfolio' element={<Portfolio/>}/> */}
                <Route path='/portfolioItem' element={<PortfolioItem/>}/>
                <Route path='/more' element={ <Reviews/>}/>
                <Route path='/faq' element={<FAQ/>}/>
                <Route path='/contact' element={<Info/>}/>
                
    </Routes>
    </div>
     <div className='footer'>
     <Footer/>
     </div>
    
    
  
    </>
  )
}

export default App;
