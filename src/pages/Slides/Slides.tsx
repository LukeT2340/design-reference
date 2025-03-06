import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sheet from './components/Sheet';
import './styles/main.css';
import { blocks } from './data';
import { Block } from './types';

const Slides: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const processedBlocks = blocks.map((block: Block) => ({
    ...block,
    ref: useRef<HTMLDivElement>(null),
  }));

  useEffect(() => {
    processedBlocks.forEach((block) => {
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
      {/* Block One */}
      <div className="wrapper relative pt-[30vh]" ref={containerRef}>
        {processedBlocks.map((block, index) => (
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
      <div className="relative z-40 h-screen bg-[#c5ff21] py-[200px]"></div>
    </section>
  );
};

export default Slides;
