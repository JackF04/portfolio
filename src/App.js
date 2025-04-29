import './App.css';
import CustomNavbBar from './components/CustomNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Weightlifting from './pages/Weightlifting';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/weightlifting" element={<Weightlifting />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
