import React from 'react';
import { Settings } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { servicesData } from './servicesData';
import './Services.css';

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__background"></div>
      
      <div className="services__container">
        <div className="services__header">
          <div className="services__badge">
            <Settings className="services__badge-icon" />
            Our Services
          </div>
          <h2 className="services__title">
            Comprehensive Technology Solutions
          </h2>
          <p className="services__description">
            From AI-powered automation to enterprise-grade security, we deliver solutions that drive digital transformation
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};