import React, { useState, useEffect } from 'react';

export const BuyNowTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="buy-now-banner">
      <div className="offer-content">
        <div className="offer-text">
          <span className="discount-badge">50% OFF</span>
          <span className="offer-desc">Limited Time Offer! Secure your gemstone today.</span>
        </div>
        <div className="timer">
          <div className="timer-block">
            <span className="time">{String(minutes).padStart(2, '0')}</span>
            <span className="label">MIN</span>
          </div>
          <span className="separator">:</span>
          <div className="timer-block">
            <span className="time">{String(seconds).padStart(2, '0')}</span>
            <span className="label">SEC</span>
          </div>
        </div>
      </div>
      <button className="btn btn-buy">Buy Now</button>
    </div>
  );
};
