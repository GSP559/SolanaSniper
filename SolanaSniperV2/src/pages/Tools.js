// src/pages/Tools.js
import React from 'react';
import './Tools.css';

const Tools = () => {
  return (
    <div className="tools-container">
      <div className="tool-card">
        <h2>INFINITY AIO</h2>
        <ul>
          <li>Flood your project with authentic comments</li>
          <li>Generate enticing volume and chart activity</li>
          <li>Launch and manage your token with pinpoint precision</li>
        </ul>
        <p>
          From project inception to sustained growth, our AIO Package provides everything you need to stand out in the competitive Pump.Fun landscape.
        </p>
        <button className="learn-more">Learn More</button>
        <span className="price-tag">PRICE: 26 SOL</span>
      </div>

      <div className="tool-card">
        <h2>INFINITY BUNDLER</h2>
        <p>
          Our most powerful script to date, Infinity Bundler is designed to be used for all your needs.
        </p>
        <button className="learn-more">Learn More</button>
        <span className="price-tag">PRICE: 18 SOL</span>
      </div>
    </div>
  );
};

export default Tools;
