import React, { } from 'react';
import { Monitor, Cpu, Headphones } from 'lucide-react';
import { GoArrowRight } from 'react-icons/go'; 
import './AboutUs.css';

const AboutUs = () => {



  return (
    <div className="min-h-screen bg-gray-900 text-white">
 
  

      {/* About Section */}
      <div className="aboutus-about-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="aboutus-about-title">Our Journey</h2>
          <p className="aboutus-about-text">
          Founded in 2010, TechNova has been at the forefront of the electronic retail industry for over a decade. Our passion for technology and commitment to customer satisfaction have made us a trusted name in the market.
          </p>
          <p className="aboutus-about-text">
            Our commitment to innovation, quality, and customer satisfaction has been the driving force behind our success. At TechNova, we don't just sell electronics – we provide solutions that enhance lives and businesses.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="aboutus-features-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="aboutus-features-title">Why Choose TechNova?</h2>
          <div className="aboutus-features-grid">
            {[
              { icon: Monitor, title: 'Cutting-Edge Products', description: 'Access to the latest and most innovative tech in the market.' },
              { icon: Cpu, title: 'Expert Support', description: 'Our team of tech gurus is always ready to assist you.' },
              { icon: Headphones, title: '24/7 Customer Service', description: 'Round-the-clock support for all your tech needs.' },
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="aboutus-feature-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <feature.icon className="aboutus-feature-icon" />
                <h3 className="aboutus-feature-title">{feature.title}</h3>
                <p className="aboutus-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
   {/* CTA Section */}
   <div className="aboutus-cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="aboutus-cta-title">Ready to Experience the Future?</h2>
          <p className="aboutus-cta-subtitle">Join the TechNova community and stay ahead in the world of technology.</p>
          <button className="aboutus-cta-button">
            Explore Our Products
            <GoArrowRight className="aboutus-cta-icon" />  {/* Add icon inside the button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
