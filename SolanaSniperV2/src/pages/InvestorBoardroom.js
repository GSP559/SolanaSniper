import React from 'react';
import './Home.css';
import './Tools.css';

const InvestorBoardroom = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to the <span>Investor's Boardroom</span></h1>
        <p>
          Exclusive access to our premium HandsomeSniper software packages. 
          Choose the version that best suits your operating system and trading needs.
        </p>
      </div>

      <div className="tools-container">
        <div className="tool-card">
          <h2>HandsomeSniper V2.0 for Windows</h2>
          <ul>
            <li>Latest features and improvements</li>
            <li>Optimized for Windows environments</li>
            <li>Enhanced performance and stability</li>
          </ul>
          <a href="/downloads/HandsomeSniper_V2_Windows.zip" className="learn-more" download>Download for Windows</a>
          <span className="price-tag">PRICE: FREE for Boardroom Members</span>
        </div>

        <div className="tool-card">
          <h2>HandsomeSniper V1.39 for MacOS</h2>
          <ul>
            <li>Tailored for MacOS users</li>
            <li>Sleek interface matching Apple design principles</li>
            <li>Powerful sniping capabilities</li>
          </ul>
          <a href="/downloads/HandsomeSniper_V139_for_Mac.zip" className="learn-more" download>Download for MacOS</a>
          <span className="price-tag">PRICE: FREE for Boardroom Members</span>
        </div>

        <div className="tool-card">
          <h2>HandsomeSniper V1.39 for Linux</h2>
          <ul>
            <li>Linux-compatible version</li>
            <li>Command-line interface option available</li>
            <li>Highly customizable for power users</li>
          </ul>
          <a href="/downloads/HandsomeSniperV139_Linux.zip" className="learn-more" download>Download for Linux</a>
          <span className="price-tag">PRICE: FREE for Boardroom Members</span>
        </div>
      </div>
    </div>
  );
};

export default InvestorBoardroom;