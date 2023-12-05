import './App.css';
import { Stopwatch } from './Components/StopWatch';
import TaskList from './Components/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  
  return (
    <TaskProvider>
      <div className="container">
      <Stopwatch />
      <TaskList />
    </div>
    </TaskProvider>
    
  );
}

export default App;
