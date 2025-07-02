import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export const SocialSection = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook />, url: '#' },
    { name: 'Instagram', icon: <Instagram />, url: '#' },
    { name: 'Youtube', icon: <Youtube />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin />, url: '#' }
  ];

  return (
    <div className="social-section">
      <div className="social-section__header">
        <h3 className="social-section__title">Social</h3>
        <p className="social-section__subtitle">Follow us for the latest update</p>
      </div>
      
      <div className="social-section__links">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            className="social-section__link"
            aria-label={`Follow us on ${social.name}`}
          >
            <div className="social-section__icon">
              {React.cloneElement(social.icon, { 
                size: 24 
              })}
            </div>
            <div className="social-section__content">
              <span className="social-section__brand">wyreflow</span>
              <span className="social-section__platform">{social.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};