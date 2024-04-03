import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry!</h2>
      <h4>Page not found</h4>
      <p>
        go back to <Link to="/">home page</Link>{" "}
      </p>
    </div>
  );
}
