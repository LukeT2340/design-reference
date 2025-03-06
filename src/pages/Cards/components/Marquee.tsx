interface Props {
  text: string;
  color?: string;
  zIndex?: number;
  className?: string;
}

const Marquee: React.FC<Props> = ({
  text,
  color = '#ffffff',
  zIndex = 10,
  className,
}) => {
  const marqueeText = Array(100).fill(text.toUpperCase());

  return (
    <div style={{ zIndex, color }} className={`${className} text-nowrap`}>
      {marqueeText.map((text, index) => (
        <span key={index} className="marquee-text mr-[50px]">
          {text}
        </span>
      ))}
    </div>
  );
};

export default Marquee;
