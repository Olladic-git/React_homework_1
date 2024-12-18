import React, { useState } from 'react';

const Item = ({ id, title, status, creationDate, setTasks, tasks}) => {
    const [checked, setChecked] = useState(status);
    const [edit, setEdit] = useState(false);
    const classes = ['todo'];


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

    const removeTask = () => {
        setTasks(tasks.filter((el) => el.id != id))
    }

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
        <label>
            <input type="checkbox" checked={checked} onChange={updateStaus}/>
           {edit ? (<input value={title} onChange={(e) => editTitle(e)}/>) : (<span>{title}</span>)}

           <div className='date'>
            <span>{creationDate.day}.{creationDate.month} 
            </span>
            <span>
                {creationDate.hours}:{creationDate.minutes}
            </span>
           </div>
            <button onClick={() => setEdit(!edit)}>edit</button>
            <i className='material-icons red-text' onClick={removeTask}>X</i>
        </label>
      </li>
    </div> 
  )
}

export default Item;
