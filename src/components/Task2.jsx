import { useState } from "react";

function GenerateRandomValue() {
    const [random, setRandom] = useState('');

    return (
        <div className="task-block">
            <h2>Task 2</h2>
            <h3>Generate random value from 0 to 100</h3>
            <h3>{random}</h3>
            <button onClick={() => setRandom(Math.floor(Math.random() * 101))}>Generate number</button>
        </div>
    )

}

export default GenerateRandomValue;