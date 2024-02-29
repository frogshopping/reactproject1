
import './App.css';
import { Todo_Comp } from './components/todoComponents/todo';
import {CalcComponent} from './components/calculatorComponents'

function App() {
  return (
    <div className="App">
      <Todo_Comp />
      <CalcComponent/>
    </div>
  );
}

export default App;
