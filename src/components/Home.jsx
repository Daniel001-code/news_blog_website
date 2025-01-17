import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Welcome from "./Welcome";
import useFetch from "./useFetch";
export default function Home() {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      <Welcome />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
