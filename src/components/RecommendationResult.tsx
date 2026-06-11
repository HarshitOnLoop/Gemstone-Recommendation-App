import React from 'react';
import type { Gemstone } from '../types';
import { BuyNowTimer } from './BuyNowTimer';

interface RecommendationResultProps {
  gemstone: Gemstone;
  onReset: () => void;
}

export const RecommendationResult: React.FC<RecommendationResultProps> = ({ gemstone, onReset }) => {
  return (
    <div className="card">
      <div className="result-card">
        <img src={gemstone.imageUrl} alt={gemstone.name} className="gem-image" />
        <div className="gem-info">
          <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>
            Your Perfect Match
          </p>
          <h2 className="gem-name">{gemstone.name}</h2>
          <p className="gem-desc">{gemstone.description}</p>
          
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Properties</h3>
            <div className="tags">
              {gemstone.properties.map(p => (
                <span key={p} className="tag">{p}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Zodiac Compatibility</h3>
            <div className="tags">
              {gemstone.zodiacs.map(z => (
                <span key={z} className="tag">{z}</span>
              ))}
            </div>
          </div>
          
          <button className="btn btn-primary" onClick={onReset} style={{ marginTop: '2rem' }}>
            Find Another Gemstone
          </button>
        </div>
      </div>
      
      <BuyNowTimer />
    </div>
  );
};
