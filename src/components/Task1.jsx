import { useState } from "react";

function PushElement() {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
    const push = () => {
        setArr([...arr, generateNumber()])
    }
    const generateNumber = () => {
        return Math.floor(Math.random() * 101)
    }

    return (
        <div className="task-block">
            <h2>Task 1</h2>
            <ul>
                {arr.map((el, inx) => (
                    <li key={inx}>{el}</li>
                ))}
            </ul>
            <button onClick={push}>Push random number</button>
        </div>
    )
}

export default PushElement;