import { ReactNode, RefObject } from 'react';

export type Layer = {
  image?: string;
  copy?: ReactNode;
  depth: number;
  position?: {
    currentX: number;
    currentY: number;
    targetX: number;
    targetY: number;
  };
  ref?: RefObject<HTMLImageElement>;
};

export type Background = {
  layers: Layer[];
  containerRef?: RefObject<HTMLDivElement>;
};
