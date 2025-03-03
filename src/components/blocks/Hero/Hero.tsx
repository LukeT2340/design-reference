import { useEffect, useRef } from 'react';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Block } from '../../../types';
import greenBackground from '../../../assets/images/common/green-bg.png';
import purpleBackground from '../../../assets/images/common/purple-bg.png';
import redBackground from '../../../assets/images/common/red-bg.png';
import blueBackground from '../../../assets/images/common/blue-bg.png';
import Sheet from '../../miscellaneous/Sheet';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const semiCircleRef = useRef<SVGSVGElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);
  const blocks: Block[] = [
    {
      text: 'With every sheet of paper, feel the difference.',
      textColor: '#f68d2e',
      backgroundImage: greenBackground,
      ref: useRef<HTMLDivElement>(null),
      headerBlockColor: '#193f1a',
    },
    {
      text: 'Discover colour and innovation.',
      textColor: '#ffffff',
      backgroundImage: purpleBackground,
      ref: useRef<HTMLDivElement>(null),
      headerBlockColor: '#7752d9',
    },
    {
      text: 'Support our local and global creative communities and our planet.',
      textColor: '#f8729f',
      backgroundImage: redBackground,
      ref: useRef<HTMLDivElement>(null),
      headerBlockColor: '#612028',
    },
    {
      text: 'GF Smith. Feel good papers.',
      textColor: '#ffc7cc',
      backgroundImage: blueBackground,
      ref: useRef<HTMLDivElement>(null),
      headerBlockColor: '#0050d5',
    },
  ];

  useEffect(() => {
    blocks.forEach((block) => {
      ScrollTrigger.create({
        trigger: block.ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          document.documentElement.style.setProperty(
            '--background-color',
            block.headerBlockColor
          );
          document.documentElement.style.setProperty(
            '--text-color',
            block.textColor
          );
        },
        onEnterBack: () => {
          document.documentElement.style.setProperty(
            '--background-color',
            block.headerBlockColor
          );
          document.documentElement.style.setProperty(
            '--text-color',
            block.textColor
          );
        },
      });
    });

    ScrollTrigger.create({
      trigger: bufferRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const semiCircle = semiCircleRef.current;
        if (!semiCircle) return;
        const progress = self.progress ** 2;
        semiCircle.style.transform = `scaleY(${progress})`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [blocks]);

  return (
    <section className="hero relative" ref={sectionRef}>
      <div className="fixed top-[30vh] z-20 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
          ref={semiCircleRef}
          style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
        >
          <path
            d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z"
            fill="#0050d5"
          ></path>
        </svg>
      </div>
      <div className="header h-[30vh]">
        <div
          className="fixed top-[50px] right-[calc(50vw-700px)] flex items-center justify-center gap-[10px] text-[2rem] leading-[2rem]"
          ref={headerRef}
        >
          <div className="link flex h-[48px] items-center justify-center px-5">
            <h1>SHOP</h1>
          </div>
          <div className="link flex h-[48px] items-center justify-center px-5">
            <h1>EXPLORE</h1>
          </div>
          <div className="link flex h-[48px] items-center justify-center px-9" />
        </div>
      </div>
      <div className="wrapper" ref={containerRef}>
        {/* Sheets */}
        {blocks.map((block, index) => (
          <Sheet
            key={index}
            block={block}
            index={index}
            totalBlocks={blocks.length}
          />
        ))}

        {/* Buffer for clip path animation */}
        <div className="buffer h-[100vh]" ref={bufferRef} />
      </div>
    </section>
  );
};

export default Hero;
