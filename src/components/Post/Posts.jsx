import { useState, useEffect } from "react"

function Posts() {
    const [postsArr, setPostsArr] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPostsArr(data))
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {
                    postsArr.map((post) => (
                        <li key={post.id}>
                            <p><b>Title:</b> {post.title}</p>
                            <p><b>Post:</b> {post.body}</p>
                        </li>

                    ))
                }
            </ul>
        </div>
    )

}

export default Posts;