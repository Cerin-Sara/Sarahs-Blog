import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch.js";

function BlogDetails(){
  const {id} = useParams();
  const {data: blog, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  function handleClick(){
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    }).then(()=>{
      history.push("/");
    });
  }

  return(
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;


// import { Link } from "react-router-dom";

// const BlogDetails = ({ blogs, title }) => {
//     return ( 
//         <div className="blog-details">
//             <h2>{ title }</h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <Link to={'/blogs/${blog.id}'}>
//                         <h2>{ blog.title }</h2>
//                         <p>Written by - { blog.author }</p>
//                     </Link>                    
//                 </div>
//             ))}
//         </div>
//      );
// }
 
// export default BlogDetails;