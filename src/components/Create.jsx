import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      herders: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      console.log("New blog added");
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button>Adding...</button>}
      </form>
    </div>
  );
}
