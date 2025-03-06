import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocomotiveParallax from './js/parallax';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Creative from './components/pages/Creative';

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null);

  return (
    <div>
      <main>
        <article>
          <LocomotiveParallax locoScrollRef={locoScrollRef}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/creative" element={<Creative />} />
              </Routes>
            </BrowserRouter>
          </LocomotiveParallax>
        </article>
      </main>
    </div>
  );
};

export default App;
