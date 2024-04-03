import { Link } from "react-router-dom";
export default function BlogList({ blogs, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Writen by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
