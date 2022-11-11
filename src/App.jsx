import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';
import { Footer } from './components/Footer/Footer';
import About from './components/Navbar/About/About';
import Home from './components/Navbar/Home/Home';
import { Nabvar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/projects/" element="" />
          <Route path="/jobs/" element="" />
          <Route path="/contact/" element="" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
