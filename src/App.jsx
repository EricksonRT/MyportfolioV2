import "./assets/css/app.css";
import "./assets/js/main_app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import { Nabvar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/jobs/" element="" />
          <Route path="/contact/" element="" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
