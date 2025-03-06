import TextHoverAnim from './components/TextHoverAnim';
import './styles.css';

const Creative: React.FC = () => {
  return (
    <section className="creative mt-[10vh] flex flex-col items-center">
      <ul className="flex flex-col items-center justify-center">
        <TextHoverAnim
          text="Culture"
          color="#cdcdcb"
          hoverColor="#396726"
          image="https://images.unsplash.com/photo-1612833835544-4b3b3b3b3b3b"
          href="#"
        />
        <TextHoverAnim
          text="Impact"
          color="#cdcdcb"
          hoverColor="#661d25"
          image="https://images.unsplash.com/photo-1612833835544-4b3b3b3b3b3b"
          href="#"
        />
        <TextHoverAnim
          text="People"
          color="#cdcdcb"
          hoverColor="#3d55e2"
          image="https://images.unsplash.com/photo-1612833835544-4b3b3b3b3b3b"
          href="#"
        />
        <TextHoverAnim
          text="Insights"
          color="#cdcdcb"
          hoverColor="#8887eb"
          image="https://images.unsplash.com/photo-1612833835544-4b3b3b3b3b3b"
          href="#"
        />
      </ul>
    </section>
  );
};

export default Creative;
