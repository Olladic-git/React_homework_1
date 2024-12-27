import React, { useState, useContext, useCallback } from 'react';
import ModalWind from './Modal/ModalWind';
import { MyContext } from './Context';

const Item = ({ id, title, status, creationDate }) => {
    const [checked, setChecked] = useState(status);
    const [edit, setEdit] = useState(false);
    const [isModal, setIsModal] = useState(false)
    const classes = ['todo'];

    const { tasks, setTasks } = useContext(MyContext);

    if(checked) {
        classes.push('status');
    }

    const updateStaus = () => {
        setChecked(!checked);
        setTasks((prev) => {
            let newArr = [...prev]
            newArr.map((el) => {
                    if (el.id === id) {
                        el.status = !checked
                    }
            })
            return newArr;
        });
    }

    const onRemoveTask = useCallback(() => {
        setTasks(tasks.filter((el) => el.id != id))
    }, [tasks, id]);

    const editTitle = (e) => {
        setTasks((prev) => {
            let newArr = [...prev]
            newArr.map((el) => {
                    if (el.id === id) {
                        el.title = e.target.value
                    }
            })
            return newArr;
        });

    }

  return (
    <div>
      <li className={classes.join(' ')}>
        {isModal && <ModalWind setIsModal={setIsModal} onRemoveTask={onRemoveTask}/>}
        <label>
            <input type="checkbox" checked={checked} onChange={updateStaus}/>
           {edit ? (<input value={title} onChange={(e) => editTitle(e)}/>) : (<span>{title}</span>)}
        </label>
           <div className='date'>
            <span>
                {creationDate.day}.{creationDate.month} 
            </span>
            <span>
                {creationDate.hours}:{creationDate.minutes}
            </span>
           </div>
            <button onClick={() => setEdit(!edit)}>edit</button>
            <i className='material-icons red-text' onClick={() => setIsModal(true)}>X</i>
      </li>
    </div> 
  )
}

export default Item;
