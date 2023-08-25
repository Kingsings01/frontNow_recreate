import logo from './logo.svg';
import frontnowLogo from './frontnowLogo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontnow.ai Recreacted With ReactJS
        </p>
        <a
          className="App-link"
          href="https://frontnow.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fontnow.ai
        </a>
        <p>
          <h6>Scroll Down</h6>
          &#8582;

        </p>
      </header>
      <body>
        <div className="Web-container">
          <div className="Web-header">
            <img src={frontnowLogo} className="Web-logo" alt="logo" />
            <button className="Resources-btn">Resources</button>
            <button className="Demo-btn">Book a Demo</button>
          </div>
          <div className="Engage-div">Engage. Inspire. Convert</div>
          <div><h1>Enterprise-Grade AI Supercharging</h1></div>
          <div><h1>Customer Experience</h1></div>
          <div>
            <p>The most powerful SaaS solutions to revolutionize pre-sales in e-commerce. Designed to maximize conversion rates,</p>
            <p>increase average order value, and boost customer engagement.</p>
          </div>
          <button className="StartNow-btn">Start Now &#10140;</button>
        </div>
      </body>
    </div>
  );
}

export default App;
