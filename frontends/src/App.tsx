import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Features from "./components/Features/Features";
import Compare from "./components/Compare/Compare";
import Support from "./components/Support/Support";
import BlogSingle from "./components/BlogSingle/BlogSingle";
import DropdownBlog from "./components/DropdownBlog/DropdownBlog";
import DropdownFeatures from "./components/DropdownFeatures/DropdownFeatures";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/dropdown-blog" element={<DropdownBlog />} />
          <Route path="/dropdown-features" element={<DropdownFeatures />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
