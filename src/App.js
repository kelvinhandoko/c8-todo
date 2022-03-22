import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tolong bikin aplikasi Todo kaya yang udah gw ajarin ye
        </p>
        <a
          className="App-link"
          href="https://github.com/berbinarbinar/c8-react/tree/4/todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          liat contohnya
        </a>
      </header>
    </div>
  );
}

export default App;
