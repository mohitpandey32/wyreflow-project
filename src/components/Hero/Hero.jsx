import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight, Sparkles } from 'lucide-react';
import { HeroSlide } from './HeroSlide';
import { SlideIndicators } from './SlideIndicators';
import { FloatingParticles } from './FloatingParticles';
import './Hero.css';

const heroSlides = [
  {
    title: "Leading the Way in Digital Innovation",
    subtitle: "Unlock the Potential of Digital Transformation with Our Expertise in Cloud, AI, Cybersecurity, and Data Analytics",
    cta: "See what we do",
    background: "from-violet-900 via-purple-900 to-fuchsia-900",
    accent: "from-cyan-400 to-blue-500",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
  },
  {
    title: "Shaping the Future of Business",
    subtitle: "Empowering organizations to thrive in a digital-first world with our advanced technology solutions",
    cta: "Discover Solutions",
    background: "from-blue-900 via-indigo-900 to-purple-900",
    accent: "from-emerald-400 to-teal-500",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    title: "Innovation Without Limits",
    subtitle: "Break boundaries with revolutionary technology frameworks that redefine what's possible in digital transformation",
    cta: "Start Journey",
    background: "from-indigo-900 via-blue-900 to-cyan-900",
    accent: "from-pink-400 to-rose-500",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
  }
];

export const Hero = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <HeroSlide slide={heroSlides[currentSlide]} />
      <FloatingParticles />
      
      <div className="hero__content">
        <div className="hero__container">
          <div className="hero__text-content">
            <div className="hero__badge">
              <Sparkles className="hero__badge-icon" />
              Next-Generation Technology Solutions
            </div>
            
            <h1 className="hero__title">
              <span className="hero__title-line hero__title-line--1">
                {heroSlides[currentSlide].title.split(' ').slice(0, 4).join(' ')}
              </span>
              <span className="hero__title-line hero__title-line--2">
                {heroSlides[currentSlide].title.split(' ').slice(4, 6).join(' ')}
              </span>
              <span className={`hero__title-line hero__title-line--3 hero__title-accent--${currentSlide}`}>
                {heroSlides[currentSlide].title.split(' ').slice(6).join(' ')}
              </span>
            </h1>
            
            <p className="hero__subtitle">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="hero__actions">
              <button 
                onClick={() => scrollToSection('services')}
                className="hero__cta-primary"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="hero__cta-icon" />
              </button>
              
              <button className="hero__cta-secondary">
                <Play className="hero__cta-icon" />
                Watch Demo
              </button>
            </div>
          </div>

          <SlideIndicators 
            slides={heroSlides}
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
          />
        </div>

        <div className="hero__scroll-indicator">
          <ChevronDown className="hero__scroll-icon" />
        </div>
      </div>
    </section>
  );
};