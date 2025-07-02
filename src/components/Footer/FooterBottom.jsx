import React from 'react';

export const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom__content">
        <p className="footer-bottom__copyright">
          © 2024 WyreFlow Technologies. All rights reserved.
        </p>
        <p className="design"> - Designed By Mohit </p>
        <div className="footer-bottom__links">
          <a href="#" className="footer-bottom__link">Terms of Service</a>
          <a href="#" className="footer-bottom__link">Privacy Policy</a>
          <a href="#" className="footer-bottom__link">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};