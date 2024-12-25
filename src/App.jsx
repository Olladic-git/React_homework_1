import { useCallback, useEffect, useState } from "react";
import List from "./components/List";
import CurrentDate from "./components/Date";
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from "./components/Context";

function App() {
  const [tasks, setTasks] = useState(() => !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks')));
  const [taskTitle, setTaskTitle] = useState('');
  const [unfinishedTask, setUnfinishedTask] = useState(() => {
    return (tasks.filter((task) => task.status === false)).length
  });

  const manageTask = {tasks, setTasks};

  const checkUnfinishedTask = useCallback(() => {
    let newValue = (tasks.filter(task => task.status === false).length);
    setUnfinishedTask(newValue);
  })

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
      <MyContext.Provider value={manageTask}>
        <h1>Note your task</h1>
        <CurrentDate/>
        <div className="input-field">
          <input type="text" value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
          onKeyDown={addTask}
          />
          <label className={taskTitle && 'none'}>Task name</label>
        </div>
        <List />
        <div>Незавершених задач: {unfinishedTask}</div>
      </MyContext.Provider>
    </div>
  )
}

export default App;