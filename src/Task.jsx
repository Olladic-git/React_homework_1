import { useDispatch, useSelector } from "react-redux";
import { addNote, useSelectNotes } from "./store/slice/noteSlice";
import { useState } from "react";

export default function Task() {
    const dispatch = useDispatch();
    const notes = useSelector(useSelectNotes);
    const [note, setNote] = useState('');

    return (
        <div className="homework">
            <h1>Homework</h1>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
            <button onClick={() => dispatch(addNote(note))}>Add note</button>
            <h2>Your notes</h2>
            <ul>
                {notes.map((note, index) => <li key={index}>{note}</li>)}
            </ul>
        </div>
    )
}