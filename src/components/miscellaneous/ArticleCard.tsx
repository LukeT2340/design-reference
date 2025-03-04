import { useState } from 'react';
import { Card } from '../../types';

interface Props {
  card: Card;
}

const ArticleCard: React.FC<Props> = ({ card }) => {
  const { href, image, title, category } = card;

  return (
    <a href={href} className="group relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="aspect-[4/3] h-[60%] w-full object-cover transition-all duration-500 ease-in-out group-hover:h-[52%] group-hover:scale-105"
      />
      <div className="bg-red relative flex h-[40%] w-full flex-col justify-between p-[16px] text-white transition-all duration-500 ease-in-out group-hover:h-[48%]">
        <h5 className="mb-[28px] max-w-[75%]">{title}</h5>
        <p>{category}</p>
      </div>
      <ReadIcon />
    </a>
  );
};

const ReadIcon = () => {
  return (
    <div className="absolute right-0 bottom-10 h-[150px] w-[150px] overflow-hidden transition-all duration-500 group-hover:-rotate-45">
      <svg
        width="24"
        height="24"
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-auto h-full w-full"
      >
        <defs>
          <path
            id="The-Munken-Agenda-2025-path"
            d="
  M 62, 62
  m -50, 0
  a 50,50 0 1,0 100,0
  a 50,50 0 1,0 -100,0
"
            stroke="white"
            stroke-width="2"
          ></path>
        </defs>
        <g className="-translate-x-[90px] transition-all delay-100 duration-500 ease-in-out group-hover:translate-x-0 group-hover:delay-250">
          <text fill="white" font-size="30px" baseline-shift="0" dy="0.27em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="0%">
              R
            </textPath>
          </text>
        </g>
        <g className="-translate-x-[90px] transition-all delay-150 duration-500 ease-in-out group-hover:translate-x-0 group-hover:delay-200">
          <text fill="white" font-size="30px" baseline-shift="0" dy="0.27em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="8%">
              E
            </textPath>
          </text>
        </g>
        <g className="-translate-x-[90px] transition-all delay-200 duration-500 ease-in-out group-hover:translate-x-0 group-hover:delay-150">
          <text fill="white" font-size="30px" baseline-shift="0" dy="0.27em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="15%">
              A
            </textPath>
          </text>
        </g>
        <g className="-translate-x-[90px] transition-all delay-250 duration-500 ease-in-out group-hover:translate-x-0 group-hover:delay-100">
          <text fill="white" font-size="30px" baseline-shift="9%" dy="0.27em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="23%">
              D
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default ArticleCard;
