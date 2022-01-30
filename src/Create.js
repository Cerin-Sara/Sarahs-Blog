import {useState} from "react";
import {useHistory} from "react-router-dom";

function Create(){
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  }

  return(
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={title}
          onChange={(e)=>setAuthor(e.target.value)}
        >
          <option class="auth-names" value="Mariah">Mariah</option>
          <option class="auth-names" value="Sarah">Sarah</option>
        </select>
        {!isPending && <button className="blog-add">Add blog</button>}
        {isPending && <button className="blog-add">Adding blog...</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
}

export default Create;