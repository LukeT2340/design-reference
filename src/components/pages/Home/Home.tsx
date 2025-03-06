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

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [blocks]);

  return (
    <section className="hero relative" ref={sectionRef}>
      {/* Header Block */}
      <div className="header relative z-30 h-[30vh]">
        <div
          className="fixed top-[50px] right-[calc(50vw-650px)] flex items-center justify-center gap-[10px]"
          ref={headerRef}
        >
          <div className="link flex h-[48px] items-center justify-center px-5">
            <h2>SHOP</h2>
          </div>
          <a
            href="/explore"
            className="link flex h-[48px] items-center justify-center px-5"
          >
            <h2>EXPLORE</h2>
          </a>
          <div className="link flex h-[48px] items-center justify-center px-9" />
        </div>
      </div>

      {/* Block One */}
      <div className="wrapper relative" ref={containerRef}>
        {blocks.map((block, index) => (
          <Sheet
            key={index}
            block={block}
            index={index}
            totalBlocks={blocks.length}
          />
        ))}
        {/* Buffer for clip path animation */}
        <div className="buffer h-[100vh]" />
      </div>

      {/* Block Two */}
      <div className="relative z-40 h-screen bg-[#c5ff21] py-[200px]">
        <a
          className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[3rem] text-[#0050d5] underline"
          href="/explore"
        >
          Explore
        </a>
      </div>
    </section>
  );
};

export default Home;
