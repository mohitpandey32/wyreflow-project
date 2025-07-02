import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Showcase.css';

const showcaseSlides = [
  {
    id: 1,
    title: "Harness the Power of AI and Machine Learning",
    description: "Transform your business operations with cutting-edge artificial intelligence solutions that automate processes, enhance decision-making, and unlock unprecedented insights from your data.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    id: 2,
    title: "Revolutionize with Intelligent Automation",
    description: "Streamline your workflows and boost productivity with our advanced robotic process automation and cognitive computing solutions that work seamlessly across your enterprise.",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    title: "Future-Ready Digital Transformation",
    description: "Stay ahead of the competition with our comprehensive digital transformation strategies that integrate AI, cloud computing, and advanced analytics to drive innovation.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    gradient: "from-cyan-600 to-teal-600"
  }
];

export const Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="showcase">
      <div className="showcase__container">
        <div className="showcase__slider">
          {showcaseSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`showcase__slide ${
                index === currentSlide ? 'showcase__slide--active' : ''
              }`}
            >
              <div className="showcase__content">
                <div className="showcase__text">
                  <h2 className="showcase__title">{slide.title}</h2>
                  <p className="showcase__description">{slide.description}</p>
                  <button className="showcase__cta">
                    Learn More
                  </button>
                </div>
                <div className="showcase__image-container">
                  <div className={`showcase__image-bg bg-gradient-to-br ${slide.gradient}`}></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="showcase__image"
                  />
                  <div className="showcase__image-overlay"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="showcase__nav showcase__nav--prev"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="showcase__nav showcase__nav--next"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="showcase__indicators">
          {showcaseSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`showcase__indicator ${
                index === currentSlide ? 'showcase__indicator--active' : ''
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};