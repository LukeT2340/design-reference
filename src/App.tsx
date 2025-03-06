import { useRef } from 'react';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LocomotiveParallax from './js/parallax';
import NavBar from './NavBar';
import Cards from './pages/Cards';
import Slides from './pages/Slides';
import Parallax from './pages/Parallax';
import TextHover from './pages/TextHover';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null);

  return (
    <div>
      <main>
        <article>
          <LocomotiveParallax locoScrollRef={locoScrollRef}>
            <NavBar />
            <BrowserRouter>
              <Routes>
                <Route path="/slides" element={<Slides />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/text-hover" element={<TextHover />} />
                <Route path="/parallax" element={<Parallax />} />
                <Route path="*" element={<Navigate to="/slides" />} />
              </Routes>
            </BrowserRouter>
          </LocomotiveParallax>
        </article>
      </main>
    </div>
  );
};

export default App;
