import './App.css';
import { Piano } from './Components/Piano.js';
import { Random } from './Components/Random';
import { Header } from './Components/Header';
import { Guide } from './Components/Guide';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Random />          
      <Piano />
      <Guide />
     </div>
  );
}

export default App;