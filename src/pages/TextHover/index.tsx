import TextHoverAnim from './components/TextHover';
import imageOne from './images/Homepage_selector_hover01.webp';

import './styles/main.css';

const TextHover: React.FC = () => {
  return (
    <section className="links my-[20vh] flex flex-col items-center">
      {/* Main Block */}
      <ul className="flex flex-col items-center justify-center">
        <TextHoverAnim
          text="Culture"
          color="#cdcdcb"
          hoverColor="#396726"
          image={imageOne}
          href="#"
        />
        <TextHoverAnim
          text="Impact"
          color="#cdcdcb"
          hoverColor="#661d25"
          image={imageOne}
          href="#"
        />
        <TextHoverAnim
          text="People"
          color="#cdcdcb"
          hoverColor="#3d55e2"
          image={imageOne}
          href="#"
        />
        <TextHoverAnim
          text="Insights"
          color="#cdcdcb"
          hoverColor="#8887eb"
          image={imageOne}
          href="#"
        />
      </ul>
    </section>
  );
};

export default TextHover;
