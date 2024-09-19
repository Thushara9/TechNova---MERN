import React from 'react';
import './InfoBox.css';

const InfoBox = () => {
    const boxes = [
        { id: 1, imgSrc: 'https://www.sense.lk/images/frontend/service_icons_10.webp', text: 'FAST DELIVERY' },
        { id: 2, imgSrc: 'https://www.sense.lk/images/frontend/service_icons_07.webp', text: 'SAFE PAYMENT' },
        { id: 3, imgSrc: 'https://www.sense.lk/images/frontend/service_icons_16.webp', text: 'SHOP WITH CONFIDENCE' },
        { id: 4, imgSrc: 'https://www.sense.lk/images/frontend/service_icons_13.webp', text: 'FRIENDLY SERVICE' },
    ];

    return (
        <>
        <div className="container">
            {boxes.map(box => (
                <div key={box.id} className="box">
                    <img src={box.imgSrc} alt={box.text} className="image" />
                    <p className="paragraph">{box.text}</p>
                </div>
            ))}
        </div>
        <br />
        <hr className='info-hr'/>
        </>
    );
};

export default InfoBox;
