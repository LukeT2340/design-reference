import { useState } from 'react';
import Scene from './Scene';

interface TextHoverProps {
  text: string;
  color: string;
  hoverColor: string;
  image: string;
  href: string;
}

const TextHover: React.FC<TextHoverProps> = ({
  text,
  color,
  hoverColor,
  image,
  href,
}) => {
  // const [menuActive, setMenuActive] = useState<boolean>(true);

  return (
    <li
      className="group relative overflow-hidden"
      // onMouseEnter={() => setMenuActive(true)}
      // onMouseLeave={() => setMenuActive(false)}
    >
      {/* <Scene active={menuActive} image={image} /> */}
      <Text text={text} color={color} hoverColor={hoverColor} href={href} />
    </li>
  );
};

export default TextHover;

interface TextProps {
  text: string;
  color: string;
  hoverColor: string;
  href: string;
}

const Text: React.FC<TextProps> = ({ text, color, hoverColor, href }) => {
  const letters = text.split('');

  return (
    <a
      href={href}
      target="_blank"
      className="text-wrapper ease h-fit cursor-pointer overflow-hidden transition-all duration-500 group-hover:scale-110"
      style={
        {
          color: color,
          '--hover-color': hoverColor,
        } as React.CSSProperties
      }
    >
      {letters.map((letter, index) => (
        <div
          key={index}
          className="ease relative inline-block uppercase transition-all duration-500 group-hover:text-[var(--hover-color)]"
        >
          <span
            className="ease inline-block transition-transform duration-500 group-hover:translate-y-[var(--y-initial)] group-hover:rotate-[20deg]"
            style={{
              transitionDelay: `${index * 50 + 100}ms`,
            }}
          >
            {letter}
          </span>
          <span
            className="ease absolute top-1/2 left-0 translate-y-[calc(-1*var(--y-initial))] rotate-[20deg] transition-transform delay-[var(--delay)] duration-500 group-hover:translate-y-[var(--y-final)] group-hover:rotate-[0deg]"
            style={{
              transitionDelay: `${index * 50 + 100}ms`,
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </a>
  );
};
