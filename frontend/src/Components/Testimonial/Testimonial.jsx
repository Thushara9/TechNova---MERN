import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            imgSrc: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2093',
            text: 'This is the best service I have ever used. Highly recommended!',
        },
        {
            id: 2,
            name: 'Jane Smith',
            imgSrc: 'data:image/jpeg;base64,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',
            text: 'Amazing experience! Will definitely come back again.',
        },
        {
            id: 3,
            name: 'Sam Wilson',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP8DeYeh2U2C3C7CQLPxfUBJGScbqm8x2CQ&s',
            text: 'Great quality and fantastic customer service.',
        },
        {
            id: 4,
            name: 'Alice Johnson',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCcFhf3mMcdFs33gEKfyhtSBHN3tBSSDvIvgpiDHl_0Ly-IvRPlKbAm0cP7r9MYfT8qU&usqp=CAU',
            text: 'Very satisfied with the product. Five stars!',
        },
    ];

    return (
        <>
         <div className="latest-title">
        <h2 className='re-title'>Our Customer Says</h2>
        <hr className='latest-hr'></hr>
        </div>
        <div className="testimonial-container">
            {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-box">
                    <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-name">- {testimonial.name}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Testimonial;
