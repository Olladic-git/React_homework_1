import { useEffect, useState } from "react";
import List from "./components/List";
import CurrentDate from "./components/Date";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(() => !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks')));
  const [taskTitle, setTaskTitle] = useState('');
  const [unfinishedTask, setUnfinishedTask] = useState(() => {
    return (tasks.filter((task) => task.status === false)).length
  });

  const checkUnfinishedTask = () => {
    let newValue = (tasks.filter(task => task.status === false).length);
    setUnfinishedTask(newValue);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    checkUnfinishedTask()
  }, [tasks])

  const addTask = (e) => {
    if(e.key === 'Enter' && taskTitle) {
      const date = new Date();
      setTasks([...tasks, {
        id: uuidv4(),
        title: taskTitle,
        status: false,
        creationDate: {
          day: date.getDate(),
          month: date.getMonth(),
          hours: date.getHours(),
          minutes: date.getMinutes()
        }
      }])
      setTaskTitle('')
    }
  }

  return (
    <div className="container">
      <h1>Note your task</h1>
      <CurrentDate/>
      <div className="input-field">
        <input type="text" value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
        onKeyDown={addTask}
        />
        <label className={taskTitle && 'none'}>Task name</label>
      </div>
      <List tasks={tasks} setTasks={setTasks}/>
      <div>Незавершених задач: {unfinishedTask}</div>
    </div>
  )
}

export default App;