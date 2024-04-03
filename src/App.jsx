import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const person = { name: "kelvin", age: 24 };
  const staffs = ["susan", "andy", "williams"];
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
          <Routes>
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
          <Routes>{/* <Route path="*" element={<NotFound />} /> */}</Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
