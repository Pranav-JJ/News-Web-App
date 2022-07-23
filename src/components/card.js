import React from 'react';
import image from './breakingnews.jpg'
import './card.css';

function Card(){
    return (
        
        <div className='card'>
          <img className='card-image' src={image}/>
          <div >
            <h className='card-title'>Students rejoice as CBSE class 10th, 12th results declared</h>
            <p className='card-desc' >Students celebrated their success after the announcement of the Central Board of Secondary Education (CBSE) results on Friday. </p>
            <p className='card-publish'>Published on Jul 22, 2022 07:06 PM IST</p>
            <a href="https://www.ndtv.com/education/cbse-term-2-result-2022-live-cbse-board-class-10th-12th-results-date-time-link-cbseresults-nic-in-latest-updates" target="_blank"><button className='button'>Read on</button></a>
          </div>
        </div> 
      );
    
}
export default Card;