import React from 'react';
import { Brain, Cloud, Shield, Database, Zap, Users, Building, Network } from 'lucide-react';

const services = [
  { 
    name: "Artificial Intelligence", 
    icon: <Brain className="w-6 h-6" />,
    desc: "Advanced ML & AI solutions"
  },
  { 
    name: "Cloud Architecture", 
    icon: <Cloud className="w-6 h-6" />,
    desc: "Scalable cloud infrastructure"
  },
  { 
    name: "Strategic Consulting", 
    icon: <Users className="w-6 h-6" />,
    desc: "Expert technology guidance"
  },
  { 
    name: "Cybersecurity", 
    icon: <Shield className="w-6 h-6" />,
    desc: "Enterprise security frameworks"
  },
  { 
    name: "Cognitive Operations", 
    icon: <Zap className="w-6 h-6" />,
    desc: "Intelligent automation"
  },
  { 
    name: "Data Analytics", 
    icon: <Database className="w-6 h-6" />,
    desc: "Advanced data insights"
  },
  { 
    name: "Enterprise Solutions", 
    icon: <Building className="w-6 h-6" />,
    desc: "Custom enterprise platforms"
  },
  { 
    name: "Network Solutions", 
    icon: <Network className="w-6 h-6" />,
    desc: "Next-gen connectivity"
  }
];

export const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={`services-dropdown ${isOpen ? 'services-dropdown--open' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="services-dropdown__grid">
        {services.map((service, index) => (
          <div key={index} className="services-dropdown__item">
            <div className="services-dropdown__icon">{service.icon}</div>
            <div className="services-dropdown__content">
              <div className="services-dropdown__name">{service.name}</div>
              <div className="services-dropdown__desc">{service.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};