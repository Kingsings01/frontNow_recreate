import frontnowLogo from './frontnowLogo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={frontnowLogo} className="App-logo" alt="logo" />
        <button className="Resources-btn">Resources</button>
        <button className="Demo-btn">Book a Demo</button>
      </div>
      <div className="App-body">
        <div className="Engage-div">Engage. Inspire. Convert</div>
        <div className="Enterprise-div">
          <h1>Enterprise-Grade AI Supercharging</h1>
          <h1>Customer Experience</h1>
        </div>
        <div className="">
          <p>The most powerful SaaS solutions to revolutionize pre-sales in e-commerce. Designed to maximize conversion rates, increase average order value, and boost customer engagement</p>
          <p>average order value, and boost customer engagement.</p>
        </div>
        <button className="StartNow-btn">Start Now &#10140;</button>
      </div>
    </div>
  );
}

export default App;
