import logo from './logo.svg';
import './App.css';
import Web from './Web.js';

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
      </header>
    </div>
  );
}

export default App;
