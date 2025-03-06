interface Props {
  text: string;
  color: string;
  hoverColor: string;
  image: string;
  href: string;
}

const TextHoverAnim: React.FC<Props> = ({
  text,
  color,
  hoverColor,
  image,
  href,
}) => {
  const letters = text.split('');

  return (
    <li className="overflow-hidden">
      <a
        href={href}
        target="_blank"
        className="text-wrapper group ease h-fit cursor-pointer overflow-hidden transition-all duration-500 hover:scale-110"
        style={
          {
            color: color,
            '--hover-color': hoverColor,
            '--y-initial': '-150px',
            '--y-final': '-50%',
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
    </li>
  );
};

export default TextHoverAnim;
