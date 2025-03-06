import { Card } from '../../../../../types';

interface Props {
  card: Card;
  bgColor?: string;
}

const ArticleCard: React.FC<Props> = ({ card, bgColor = '#ffffff' }) => {
  const { href, image, title, category } = card;

  return (
    <a href={href} className="group relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="aspect-[4/3] h-[60%] w-full object-cover transition-all duration-500 ease-in-out group-hover:h-[52%] group-hover:scale-105"
      />
      <div
        style={{ background: bgColor }}
        className="relative flex h-[40%] w-full flex-col justify-between p-[16px] text-white transition-all duration-500 ease-in-out group-hover:h-[48%]"
      >
        <h5 className="mb-[28px] max-w-[75%]">{title}</h5>
        <p>{category}</p>
      </div>
      <ReadIcon />
    </a>
  );
};

const ReadIcon = () => {
  return (
    <div
      className="absolute right-10 bottom-10 h-[150px] w-[80px] overflow-hidden font-bold"
      style={{ fontFamily: 'GFSHomie' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-[150px] -translate-x-[110px] transition-all delay-[100ms] duration-700 ease-[var(--ease-func)] group-hover:-translate-x-[70px]"
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
        <g className="origin-center delay-[100ms] duration-700 ease-[var(--ease-func)] group-hover:-rotate-90 group-hover:delay-[400ms]">
          <text fill="white" font-size="30px" baseline-shift="0" dy="0.3em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="0%">
              R
              <animate
                attributeName="startOffset"
                values="0%;10%"
                dur="0.5s"
                begin="mouseenter"
                fill="freeze"
              />
            </textPath>
          </text>
        </g>
        <g className="origin-center delay-[200ms] duration-700 ease-[var(--ease-func)] group-hover:-rotate-90 group-hover:delay-[300ms]">
          <text fill="white" font-size="30px" baseline-shift="0" dy="0.3em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="9%">
              E
            </textPath>
          </text>
        </g>
        <g className="origin-center delay-[300ms] duration-700 ease-[var(--ease-func)] group-hover:-rotate-90 group-hover:delay-[200ms]">
          <text fill="white" font-size="30px" baseline-shift="0" dy="0.3em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="16%">
              A
            </textPath>
          </text>
        </g>
        <g className="origin-center delay-[400ms] duration-700 ease-[var(--ease-func)] group-hover:-rotate-90 group-hover:delay-[100ms]">
          <text fill="white" font-size="30px" baseline-shift="9%" dy="0.3em">
            <textPath href="#The-Munken-Agenda-2025-path" startOffset="25%">
              D
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default ArticleCard;
