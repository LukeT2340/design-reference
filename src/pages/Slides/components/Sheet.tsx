import { useEffect, useRef } from 'react';
import { Block } from '../types';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Props {
  block: Block;
  index: number;
  totalBlocks: number;
}

const Sheet: React.FC<Props> = ({ block, index, totalBlocks }) => {
  const { text, textColor, backgroundImage, ref } = block;
  const semiCircleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (index !== totalBlocks - 1 || !ref?.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 30%',
      end: '+100%',
      onUpdate: (self) => {
        const semiCircle = semiCircleRef.current;
        if (!semiCircle) return;
        const progress = self.progress ** 1;
        semiCircle.style.transform = `scaleY(${progress})`;
      },
    });
  }, []);

  return (
    <div
      style={{
        color: textColor,
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="sheet sticky top-[30vh] h-[70vh] bg-cover bg-center bg-no-repeat"
      ref={ref}
    >
      <div className="relative h-full w-full">
        <div className="shape-wrapper absolute top-0 z-20 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1000 100"
            ref={semiCircleRef}
            className="-mt-[2px]"
            style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
          >
            <path
              d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z"
              fill={block.headerBlockColor}
            ></path>
          </svg>
        </div>
        <div
          className="mx-auto max-w-[80vw]"
          style={{ paddingTop: index === totalBlocks - 1 ? '40vh' : '6vh' }}
        >
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
