import { useRef, useState } from "react";

function GetAllInputs() {
    const [user, setUser] = useState({});
    const inputName = useRef();
    const inputLastName = useRef();
    const inputEmail = useRef();
    

    function push() {
        setUser({name: inputName.current.value, lastName: inputLastName.current.value, email: inputEmail.current.value});
        inputName.current.value = '';
        inputLastName.current.value = '';
        inputEmail.current.value = '';
    }

    return (
        <div className="task-block">
            <h2>Task 1</h2>
            <form action="">
                <input ref={inputName} type="text" placeholder="name..."/> <br />
                <input ref={inputLastName} type="text" placeholder="last name..."/> <br />
                <input ref={inputEmail} type="email" placeholder="email..."/> <br />
            </form>
            <button onClick={push}>Send data</button>
            <p>{user.name}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default GetAllInputs;