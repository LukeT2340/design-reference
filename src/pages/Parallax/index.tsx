import React from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import { layersFour, layersOne, layersThree, layersTwo } from './data';
import { Background } from './types';
import { processBackgrounds } from './utils';
import './styles/main.css';
import shape from './images/shape.svg';
import Header from './components/Header';

const Parallax = () => {
  const backgrounds: Background[] = processBackgrounds([
    // layersOne,
    // layersTwo,
    // layersThree,
    layersFour,
  ]);

  return (
    <section className="relative">
      <Header />
      {backgrounds.map((background: Background, index: number) => (
        <React.Fragment key={index}>
          <div
            className="pointer-events-none relative h-[130vh] w-screen overflow-hidden"
            ref={background.containerRef}
          >
            <ParallaxBackground
              layers={background.layers}
              containerRef={background.containerRef}
            />
            <img
              src={shape}
              alt="shape"
              className="absolute -bottom-[180px] w-full"
            />
          </div>
          <div className="h-screen w-screen" />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Parallax;
