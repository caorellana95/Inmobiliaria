import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
       <header className="App-header">
      <Home/>
      </header>
    </div>
  );
}

export default App;
