import React, { useContext } from 'react';
import Item from './Item';
import { MyContext } from './Context';

const List = () => {
    const { tasks } = useContext(MyContext);
  return (
    <ul>
      {tasks.map((task) => (
          <Item key={task.id} {...task} />
        ))}
    </ul>
  )
}

export default List;
