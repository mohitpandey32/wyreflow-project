import React from 'react';
import { 
  Smartphone, Truck, Code, Heart, Users, Database, 
  GraduationCap, Building, Briefcase, Globe, Zap, Lock 
} from 'lucide-react';

const industries = [
  { name: "E-commerce", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Transportation", icon: <Truck className="w-5 h-5" /> },
  { name: "Research & Development", icon: <Code className="w-5 h-5" /> },
  { name: "Healthcare", icon: <Heart className="w-5 h-5" /> },
  { name: "Consulting", icon: <Users className="w-5 h-5" /> },
  { name: "Software Platforms", icon: <Database className="w-5 h-5" /> },
  { name: "Education Technology", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Government Services", icon: <Building className="w-5 h-5" /> },
  { name: "Recruitment", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Media & Communications", icon: <Globe className="w-5 h-5" /> },
  { name: "High Technology", icon: <Zap className="w-5 h-5" /> },
  { name: "Financial Services", icon: <Lock className="w-5 h-5" /> }
];

export const IndustriesDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={`industries-dropdown ${isOpen ? 'industries-dropdown--open' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="industries-dropdown__grid">
        {industries.map((industry, index) => (
          <div key={index} className="industries-dropdown__item">
            <div className="industries-dropdown__icon">{industry.icon}</div>
            <span className="industries-dropdown__name">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};