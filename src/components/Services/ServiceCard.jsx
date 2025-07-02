import React from 'react';

export const ServiceCard = ({ service, index }) => {
  return (
    <div className="service-card">
      <div className={`service-card__background service-card__background--${index}`}></div>
      
      <div className="service-card__content">
        <div className={`service-card__image-container service-card__image-container--${index}`}>
          <img 
            src={service.image} 
            alt={service.title}
            className="service-card__image"
          />
          <div className="service-card__image-overlay"></div>
        </div>
        
        <h3 className="service-card__title">
          {service.title}
        </h3>
        
        <p className="service-card__description">
          {service.desc}
        </p>
      </div>
    </div>
  );
};