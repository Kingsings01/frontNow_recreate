import frontnowLogo from './frontnowLogo.svg';
import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <section className="Section-nav">
        <div className="App-header">
          <img src={frontnowLogo} className="App-logo" alt="logo" />
          <button className="Resources-btn">Resources</button>
          <button className="Demo-btn">Book a Demo</button>
        </div>
      </section>
      <section className="Section-hero">
        <div className="App-body">
          <div className="Engage-div">Engage. Inspire. Convert</div>
          <div className="Enterprise-div">
            <h1>Enterprise-Grade AI Supercharging</h1>
            <h1>Customer Experience</h1>
          </div>
          <div className="Long-p">
            <p>The most powerful SaaS solutions to revolutionize pre-sales in e-commerce. Designed to maximize conversion rates, increase average order value, and boost customer engagement</p>
          </div>
          <button className="StartNow-btn">Start Now &#10140;</button>
        </div>
      </section>
      <div className="Green-line">-</div>
    </div>
  )
}

export default HomePage;