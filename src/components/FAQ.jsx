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
        Before embarking on my creative journey in IT, I attempted to learn Python and Java. However, our paths didn't align as I didn't feel comfortable with them. It was when JavaScript caught my attention that I knew it was the right fit for me.
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
        I am accustomed to writing in React, so it's my preferred framework.
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
        It's a convenient approach, particularly for online stores, as it saves time and is easy to integrate with the Front-End.
        </AccordionDetails>
    
      </Accordion>
      <Accordion  className="mini-quetion-container">
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3-content"
          id="panel3-header"
          className='accordion-head'
        >
          How do you see your future?

        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
        I aspire to master Front-End development and then acquire additional skills to further my passion for IT. In the future, I envision myself as a confident expert capable of bringing creativity and innovative solutions to the field of IT.
        </AccordionDetails>
    
      </Accordion>
      
            </div>
            </div>
    
        </div>
         
        </div>
  )
}

export default FAQ