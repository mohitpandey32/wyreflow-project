import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactData = [
  { 
    icon: <Mail />, 
    title: "Email", 
    content: "hello@wyreflow.com",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: <Phone />, 
    title: "Phone", 
    content: "+1 (555) 123-4567",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: <MapPin />, 
    title: "Location", 
    content: "San Francisco, CA",
    color: "from-purple-500 to-pink-500"
  }
];

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      {contactData.map((contact, index) => (
        <div key={index} className="contact-info__item">
          <div className={`contact-info__icon contact-info__icon--${index}`}>
            {React.cloneElement(contact.icon, { 
              size: 24, 
              className: "contact-info__icon-svg" 
            })}
          </div>
          <div className="contact-info__content">
            <div className="contact-info__title">{contact.title}</div>
            <div className="contact-info__text">{contact.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};