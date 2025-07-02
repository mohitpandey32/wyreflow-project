import React from 'react';

export const SlideIndicators = ({ slides, currentSlide, onSlideChange }) => {
  return (
    <div className="slide-indicators">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`slide-indicator ${
            index === currentSlide ? 'slide-indicator--active' : ''
          }`}
        ></button>
      ))}
    </div>
  );
};