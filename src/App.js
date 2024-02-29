
import './App.css';
import { Todo_Comp } from './components/todoComponents/todo';
import {ButtonsComponent} from './components/calculatorComponents/ButtonsComponent'

function App() {
  return (
    <div className="App">
      <Todo_Comp />
      <ButtonsComponent/>
    </div>
  );
}

export default App;
