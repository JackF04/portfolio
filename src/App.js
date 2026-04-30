import { useEffect, useState } from 'react';
import './App.css';
import CustomNavbBar from './components/CustomNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Weightlifting from './pages/Weightlifting';
import NotFound from './pages/NotFound';

let hasAnimatedOnce = false;
const ANIMATION_DURATION_MS = 2000;

function App() {
  const [skipTyping, setSkipTyping] = useState(hasAnimatedOnce);

  useEffect(() => {
    if (hasAnimatedOnce) return;
    const t = setTimeout(() => {
      hasAnimatedOnce = true;
      setSkipTyping(true);
    }, ANIMATION_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      <div className={`App ${skipTyping ? 'no-typing' : ''}`}>
        <CustomNavbBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/weightlifting" element={<Weightlifting />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
