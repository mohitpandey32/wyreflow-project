import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ServicesDropdown } from './ServicesDropdown';
import { IndustriesDropdown } from './IndustriesDropdown';
import './Navigation.css';

export const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services', hasDropdown: true },
    { name: 'About Us', id: 'about' },
    { name: 'Career', id: 'career' },
    { name: 'Industries', id: 'industries', hasDropdown: true },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (item) => {
    if (item.id) {
      scrollToSection(item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${scrollY > 50 ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        <div className="navigation__content">
          <div className="navigation__logo">wyreflow</div>
          
          {/* Desktop Menu */}
          <div className="navigation__menu">
            {navigationItems.map((item) => (
              <div key={item.name} className="navigation__item">
                <button
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() => {
                    if (item.name === 'Services') setIsServicesOpen(true);
                    if (item.name === 'Industries') setIsIndustriesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'Services') setIsServicesOpen(false);
                    if (item.name === 'Industries') setIsIndustriesOpen(false);
                  }}
                  className={`navigation__link ${
                    activeSection === item.id ? 'navigation__link--active' : ''
                  }`}
                >
                  <span className="navigation__link-text">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="navigation__chevron" />}
                  <div className={`navigation__link-bg ${
                    activeSection === item.id ? 'navigation__link-bg--active' : ''
                  }`} />
                </button>

                {/* Services Dropdown */}
                {item.name === 'Services' && (
                  <ServicesDropdown 
                    isOpen={isServicesOpen}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  />
                )}

                {/* Industries Dropdown */}
                {item.name === 'Industries' && (
                  <IndustriesDropdown 
                    isOpen={isIndustriesOpen}
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navigation__mobile-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navigation__mobile-menu">
            <div className="navigation__mobile-content">
              {['Home', 'Services', 'About Us', 'Career', 'Industries', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '').replace('aboutus', 'about'))}
                  className="navigation__mobile-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};