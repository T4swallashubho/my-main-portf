import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/material-ui-comp/Blog";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Project />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
