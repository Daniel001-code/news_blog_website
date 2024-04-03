import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar">
      <h1>DanTech Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </nav>
  );
}
