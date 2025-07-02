import React from 'react';
import { SocialSection } from './SocialSection';
import { FooterContent } from './FooterContent';
import { FooterBottom } from './FooterBottom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <SocialSection />
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  );
};