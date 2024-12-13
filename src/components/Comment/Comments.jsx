import { useEffect, useState } from "react";

function Comments() {
    const [commentsArr, setCommentsArr] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => setCommentsArr(data))
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {
                    commentsArr.map((comment) => (
                        <li key={comment.id}>
                            <p><b>Name:</b> {comment.name}</p>
                            <p><b>Email:</b> {comment.email}</p>
                            <p><b>Text:</b> {comment.body}</p>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Comments;