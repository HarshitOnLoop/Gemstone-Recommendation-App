import React from 'react';
import { Search, User, Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="social-icons">
            <a href="#"><FaFacebook size={18} /></a>
            <a href="#"><FaInstagram size={18} /></a>
            <a href="#"><FaYoutube size={18} /></a>
          </div>
          <div className="top-bar-text">
            Best Quality Products <ArrowRight size={16} style={{ marginLeft: '4px' }} />
          </div>
          <div className="top-bar-spacer"></div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav-wrapper">
        <div className="container main-nav">
          <div className="logo-container">
            <img src="App/public/logo.jpeg" alt="Humara Pandit Logo" className="logo" />
          </div>

          <nav className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">About Us</a>
            <a href="#">Crystals</a>
            <a href="#">Gemstone</a>
            <a href="#">Rudraksh</a>
          </nav>

          <div className="nav-icons">
            <button className="icon-btn"><Search size={22} /></button>
            <button className="icon-btn"><User size={22} /></button>
            <button className="icon-btn icon-badge-container">
              <Heart size={22} />
              <span className="badge">0</span>
            </button>
            <button className="icon-btn icon-badge-container">
              <ShoppingCart size={22} />
              <span className="badge">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
