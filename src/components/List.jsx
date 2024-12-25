import React, { useContext } from 'react';
import Item from './Item';
import { MyContext } from './Context';

const List = () => {
    const {tasks, setTasks} = useContext(MyContext)
  return (
    <ul>
      {tasks.map((task) => (
          <Item key={task.id} {...task} setTasks={setTasks} tasks={tasks}/>
        ))}
    </ul>
  )
}

export default List;
