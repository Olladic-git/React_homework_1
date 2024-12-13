import Comments from "./Comment/Comments";
import Posts from "./Post/Posts";
function PostsAndComments() {

    return (
        <>
        <h2>Task 0</h2>
        <div className="container">
            <Comments/>
            <Posts/>
        </div>
        </>
    )

}

export default PostsAndComments;