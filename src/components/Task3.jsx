import { useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState('rgb(0, 0, 0)');
    const generateRandomColor = () => {
        const randomValue = () => Math.floor(Math.random() * 256)

        return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
    }

    return (
        <div>
            <h2>Task 3</h2>
            <p style={{color: color}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nulla deleniti ea non? Non, libero.</p>
            <button onClick={() => setColor(generateRandomColor())}>Change text color</button>
        </div>
    )
}
export default ChangeColor;