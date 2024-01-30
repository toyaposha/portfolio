import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
const FAQ = () => {
    
  return (
    <div className="faq">
        <div className='container'>
            <div className='faq_wrapper'>
            <div className="faq-left">
                <h5>FAQ</h5>
                <h3>Frequently Asked <span>Questions</span></h3>
                <p>If you have any other questions, you can contact me by email <span>toyaposha@mail.ru</span></p>
            </div>
       
            <div className="faq-right">
            <Accordion className="mini-quetion-container">
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordion-head'
        >
          Why did you choose Front-end?
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>      
I tried to learn Python and Java. But I didn't like it. And when I tried JavaScript, I realized that it was for me.
        </AccordionDetails>
      </Accordion>
      <Accordion className="mini-quetion-container">
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='accordion-head'
        >
          React or Next.js?
        </AccordionSummary>
        <AccordionDetails className='accordion-content' >
        I prefer React. I guess I'm just used to writing on it.
        </AccordionDetails>
      </Accordion>
      <Accordion  className="mini-quetion-container">
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3-content"
          id="panel3-header"
          className='accordion-head'
        >
          In the portfolio why did you use Sanity?
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
        It is very convenient, especially if you have an online store. We don't waste time writing backend. And it's easy to connect to frontend
        </AccordionDetails>
    
      </Accordion>
      <Accordion  className="mini-quetion-container">
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3-content"
          id="panel3-header"
          className='accordion-head'
        >
          Place for new question
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
        Empty
        </AccordionDetails>
    
      </Accordion>
            </div>
            </div>
    
        </div>
         
        </div>
  )
}

export default FAQ