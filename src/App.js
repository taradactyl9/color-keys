import './App.css';
import { Piano } from './Components/Piano.js';
import { Random } from './Components/Random';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Random />          
      <Piano />
     </div>
  );
}

export default App;