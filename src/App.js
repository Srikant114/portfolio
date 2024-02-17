import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  Navbar,
  Footer,
  ProjectSummary,
  BlogsPage,
  BlogSummary,
  PageNotFound,
  ScrollToTop,
} from "./components";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project"

// const Home = React.lazy(() => import("./pages/Home/Home"));
// const Project = React.lazy(() => import("./pages/Project/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");

  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectSummary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogsPage />} />
          <Route path=":blog_path" element={<BlogSummary />} />
        </Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>

      {isFalse || <Footer />}
    </>
  );
}

export default App;
