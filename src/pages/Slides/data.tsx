import { Block } from './types';
import greenBackground from './images/green-bg.png';
import purpleBackground from './images/purple-bg.png';
import redBackground from './images/red-bg.png';
import blueBackground from './images/blue-bg.png';

export const blocks: Block[] = [
  {
    text: 'With every sheet of paper, feel the difference.',
    textColor: '#f68d2e',
    backgroundImage: greenBackground,
    headerBlockColor: '#193f1a',
  },
  {
    text: 'Discover colour and innovation.',
    textColor: '#ffffff',
    backgroundImage: purpleBackground,
    headerBlockColor: '#7752d9',
  },
  {
    text: 'Support our local and global creative communities and our planet.',
    textColor: '#f8729f',
    backgroundImage: redBackground,
    headerBlockColor: '#612028',
  },
  {
    text: 'GF Smith. Feel good papers.',
    textColor: '#ffc7cc',
    backgroundImage: blueBackground,
    headerBlockColor: '#0050d5',
  },
];
