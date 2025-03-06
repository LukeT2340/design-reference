import { Layer } from './types';
import nature1 from './images/nature-1.png';
import nature2 from './images/nature-2.png';
import nature3 from './images/nature-3.png';
import nature4 from './images/nature-4.png';
import nature5 from './images/nature-5.png';
import nature6 from './images/nature-6.png';

import snow1 from './images/snow-1.jpg';
import snow2 from './images/snow-2.png';
import snow3 from './images/snow-3.png';

import experience1 from './images/experience-1.png';
import experience2 from './images/experience-2.png';
import experience3 from './images/experience-3.png';
import experience4 from './images/experience-4.png';
import experience5 from './images/experience-5.png';

import nt1 from './images/couple-on-rocks.png';
import nt2 from './images/midground.png';
import nt3 from './images/background.png';
import symbols from './images/symbols.svg';

export const layersOne: Layer[] = [
  {
    image: nature1,
    depth: 0.1,
  },
  {
    image: nature2,
    depth: 0.3,
  },
  {
    image: nature3,
    depth: 0.4,
  },
  {
    copy: (
      <h1 className="mr-[150px] mb-[350px] text-[8rem] font-bold text-nowrap text-white">
        Hello, World!
      </h1>
    ),
    depth: 0.75,
  },
  {
    image: nature4,
    depth: 0.7,
  },
  {
    image: nature5,
    depth: 0.9,
  },
  {
    image: nature6,
    depth: 1,
  },
];

export const layersTwo: Layer[] = [
  {
    image: snow1,
    depth: 0.8,
  },
  {
    image: snow2,
    depth: 0.3,
  },
  {
    copy: (
      <h1 className="mb-[100px] text-[8rem] font-bold text-nowrap text-black">
        Hello, World!
      </h1>
    ),
    depth: 0.7,
  },
  {
    image: snow3,
    depth: 0.6,
  },
];

export const layersThree: Layer[] = [
  {
    image: experience1,
    depth: 0.3,
  },
  {
    image: experience2,
    depth: 0.4,
  },
  {
    image: experience3,
    depth: 0.5,
  },
  {
    copy: (
      <h1 className="mb-[100px] text-[8rem] font-bold text-nowrap text-orange-600">
        Welcome to New York!
      </h1>
    ),
    depth: 0.1,
  },

  {
    image: experience4,
    depth: 0.6,
  },
  {
    image: experience5,
    depth: 0.7,
  },
];

export const layersFour: Layer[] = [
  {
    image: nt1,
    depth: 0.2,
  },
  {
    copy: (
      <div className="font-ubuntu mb-[160px] max-w-[684px] text-center text-white">
        <h1 className="mb-[20px] leading-[100px] font-bold normal-case! lg:text-[70px] 2xl:text-[92px]">
          Seeking a road less travelled
        </h1>
        <h2 className="mx-auto mb-[20px] max-w-[390px] leading-[30px] font-medium normal-case! lg:text-[18px] 2xl:text-[23px]">
          Why a Northern Territory road trip is the ultimate adventure.{' '}
        </h2>
        <img src={symbols} alt="symbols" className="mx-auto" />
      </div>
    ),
    depth: 0.4,
  },
  {
    image: nt2,
    depth: 0.5,
  },
  {
    image: nt3,
    depth: 0.6,
  },
];
