import React from 'react';
import { MousePointer } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import './Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__background"></div>
      
      <div className="contact__container">
        <div className="contact__header">
          <div className="contact__badge">
            <MousePointer className="contact__badge-icon" />
            Get In Touch
          </div>
          <h2 className="contact__title">
            Ready to <span className="contact__title-accent">Transform</span>?
          </h2>
          <p className="contact__description">
            Let's discuss how we can accelerate your digital transformation journey with cutting-edge solutions
          </p>
        </div>

        <div className="contact__content">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};