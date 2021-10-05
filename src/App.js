import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Messages from './components/Messages';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet>
        <h2> hello aysha</h2>
      </Greet>
      <Welcome/>
      <Messages/>
      <Counter/>
    </div>
  );
}

export default App;
