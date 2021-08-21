import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const SingleBlog = () => {
    const { id } = useParams();
    const { data:blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted.');
            history.push('/')
        });
    }

    return ( 
        <div className="single-blog">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p> Written by { blog.author } </p>
                    <p> { blog.body } </p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default SingleBlog;