import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import from react-router-dom

import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = {
      "/": "Shakti Kashyap",
      "/work": "Shakti Kashyap - work",
      "/about": "Shakti Kashyap - About",
      "/experience": "Shakti Kashyap - Experience",
      "/contact": "Shakti Kashyap - Contact me",
    };
    document.title = pageTitle[location.pathname];
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
