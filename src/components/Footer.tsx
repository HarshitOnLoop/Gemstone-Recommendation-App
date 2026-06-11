import React from 'react';
import { Mail, ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        {/* Column 1 */}
        <div className="footer-col about-col">
          <h3>About us</h3>
          <p>
            Humara Pandit delivers sacred items from revered temples across India, 
            bringing divine blessings like Bhabhuti from Salasar Balaji, 
            Chunni from Mansa Devi, and Gangajal from Mahakumbh straight to your doorstep.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Contact Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col newsletter-col">
          <h3>Newsletter</h3>
          <p>Write your email first to know about any information</p>
          <div className="newsletter-input-group">
            <Mail size={18} className="mail-icon" />
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="newsletter-submit">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© 2026, Humara Pandit</p>
          <div className="payment-icons">
            {/* Using text blocks or small images for payment methods */}
            <span className="payment-badge">VISA</span>
            <span className="payment-badge">MC</span>
            <span className="payment-badge">AMEX</span>
            <span className="payment-badge">PAYPAL</span>
          </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};
