import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.js';
import World from './components/World';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Hello />
     <World />
    </div>
  );
}

export default App;
