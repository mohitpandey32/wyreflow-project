import React from 'react';

export const FooterContent = () => {
  const industries = [
    'Banking',
    'Consulting', 
    'Communications and Media',
    'E-commerce',
    'Ed-Tech / Education',
    'Government & Public Services',
    'HealthCare',
    'High-Tech'
  ];

  const services = [
    'Artificial Intelligence',
    'Cloud',
    'Consulting',
    'Cybersecurity',
    'Cognitive Business Operations',
    'Data & Analytics',
    'Enterprises solution',
    'Network Solution and Services'
  ];

  const moreInfo = [
    'About us',
    'Career',
    'Contact us',
    'Privacy Notice',
    'Disclaimer'
  ];

  return (
    <div className="footer-content">
      <div className="footer-content__section">
        <h4 className="footer-content__title">Industries</h4>
        <ul className="footer-content__list">
          {industries.map((industry, index) => (
            <li key={index} className="footer-content__item">
              <a href="#" className="footer-content__link">{industry}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-content__section">
        <h4 className="footer-content__title">Services</h4>
        <ul className="footer-content__list">
          {services.map((service, index) => (
            <li key={index} className="footer-content__item">
              <a href="#" className="footer-content__link">{service}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-content__section">
        <h4 className="footer-content__title">More Information</h4>
        <ul className="footer-content__list">
          {moreInfo.map((info, index) => (
            <li key={index} className="footer-content__item">
              <a href="#" className="footer-content__link">{info}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};