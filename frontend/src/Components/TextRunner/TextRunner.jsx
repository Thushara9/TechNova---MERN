import React from 'react'
import './TextRunner.css'
const TextRunner = () => {
    const items = [
        'AUTHENTIC PRODUCTS',
        'WE DELIVER THROUGHOUT THE ISLAND',
        'ALL MAJOR BRANDS AT BEST PRICES',
        '100% AUTHENTIC PRODUCTS',
        '100% AUTHENTIC PRODUCTS',
        
      ];
    
      return (
        <div className="scrolling-container">
          <div className="scrolling-text">
            {items.map((item, index) => (
              <span key={index} className="scrolling-item">
                {item} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
            {items.map((item, index) => (
              <span key={`duplicate-${index}`} className="scrolling-item">
                {item} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      );
    };

export default TextRunner
