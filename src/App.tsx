import { useRef } from 'react';
import LocomotiveParallax from './js/parallax';
import Hero from './components/blocks/Hero';

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null);

  return (
    <div>
      <main>
        <article>
          <LocomotiveParallax locoScrollRef={locoScrollRef}>
            <Hero />
          </LocomotiveParallax>
        </article>
      </main>
    </div>
  );
};

export default App;
