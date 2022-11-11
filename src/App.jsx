import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';
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
    </>
  );
}

export default App;
