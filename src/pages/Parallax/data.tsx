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
      <h1 className="mb-[100px] text-[8rem] font-bold text-black">
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
