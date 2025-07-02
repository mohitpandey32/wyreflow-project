import React from 'react';

export const HeroSlide = ({ slide }) => {
  return (
    <div className="hero-slide">
      <img 
        src={slide.image}
        alt="Digital Innovation"
        className="hero-slide__image"
      />
      <div className="hero-slide__overlay"></div>
      <div className="hero-slide__gradient"></div>
      
      {/* Animated Overlay Effects */}
      <div className="hero-slide__effects">
        <div className="hero-slide__effect hero-slide__effect--pulse"></div>
        <div className="hero-slide__effect hero-slide__effect--float-1"></div>
        <div className="hero-slide__effect hero-slide__effect--float-2"></div>
      </div>
    </div>
  );
};