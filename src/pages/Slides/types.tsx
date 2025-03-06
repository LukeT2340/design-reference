import { RefObject } from 'react';

export type Block = {
  text: string;
  backgroundImage: string;
  textColor: string;
  ref?: RefObject<HTMLDivElement>;
  headerBlockColor: string;
};
