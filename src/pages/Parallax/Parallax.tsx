import React from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import { layersOne, layersThree, layersTwo } from './data';
import { Background } from './types';
import { processBackgrounds } from './utils';

const Parallax = () => {
  const backgrounds: Background[] = processBackgrounds([
    layersOne,
    layersTwo,
    layersThree,
  ]);

  return (
    <section>
      {backgrounds.map((background: Background, index: number) => (
        <React.Fragment key={index}>
          <div
            className="relative h-screen w-screen overflow-hidden"
            ref={background.containerRef}
          >
            <ParallaxBackground
              layers={background.layers}
              containerRef={background.containerRef}
            />
            <div className="absolute bottom-0 h-[15vh] w-full bg-gradient-to-t from-[#101208] to-transparent" />
          </div>
          <div className="h-screen w-screen bg-[#101208]" />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Parallax;
