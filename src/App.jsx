import { useCallback, useEffect, useState } from "react";
import List from "./components/List";
import CurrentDate from "./components/Date";
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from "./components/Context";

function App() {
  const [tasks, setTasks] = useState(() => !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks')));
  const [taskTitle, setTaskTitle] = useState('');
  const [unfinishedTask, setUnfinishedTask] = useState(0);

  const manageTask = { tasks, setTasks };

  const checkUnfinishedTask = useCallback(() => {
    setUnfinishedTask(tasks.filter(task => task.status === false).length);
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    checkUnfinishedTask()
  }, [tasks])

  const onAddTask = (e) => {
    if (e.key === 'Enter' && taskTitle) {
      addTask({
        title: taskTitle,
        creationDate: new Date()
      });
    }
  }

  const addTask = ({ title, creationDate }) => {
    setTasks([...tasks, {
      id: uuidv4(),
      title: title,
      status: false,
      creationDate: {
        day: creationDate.getDate(),
        month: creationDate.getMonth(),
        hours: creationDate.getHours(),
        minutes: creationDate.getMinutes()
      }
    }]);
    setTaskTitle('');
  }

  return (
    <div className="container">
      <MyContext.Provider value={manageTask}>
        <h1>Note your task</h1>
        <CurrentDate />
        <div className="input-field">
          <input type="text" value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onKeyDown={onAddTask}
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