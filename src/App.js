import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
