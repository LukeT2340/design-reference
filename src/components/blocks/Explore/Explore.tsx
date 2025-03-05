import { Card } from '../../../types';
import imageOne from '../../../assets/images/common/card-1.webp';
import imageTwo from '../../../assets/images/common/card-2.webp';
import imageThree from '../../../assets/images/common/card-3.webp';
import imageFour from '../../../assets/images/common/card-4.webp';
import imageFive from '../../../assets/images/common/card-5.webp';
import imageSix from '../../../assets/images/common/card-6.webp';
import ArticleCard from '../../miscellaneous/ArticleCard';
import Marquee from '../../miscellaneous/Marquee';

const Explore: React.FC = () => {
  const cards: Card[] = [
    {
      image: imageOne,
      title: 'Varnishing Day: a Moment in Time',
      href: '/explore',
      category: 'Create',
    },
    {
      image: imageTwo,
      title: 'The Munken Agenda 2025',
      href: '/explore',
      category: 'Inspire',
    },
    {
      image: imageThree,
      title: 'GF Smith x Gmund',
      href: '/explore',
      category: 'Learn',
    },
    {
      image: imageFour,
      title: 'Joyful guides by Sundae Press',
      href: '/explore',
      category: 'Create',
    },
    {
      image: imageFive,
      title: 'Queer Pioneers by Mel Carroll',
      href: '/explore',
      category: 'Create',
    },
    {
      image: imageSix,
      title: 'Paper Sculptures by Pauline Loctin',
      href: '/explore',
      category: 'Create',
    },
  ];

  return (
    <section className="explore relative my-[10vh]">
      {/* Header Block */}
      <div className="header relative z-30 h-[30vh]">
        <div className="fixed top-[50px] right-[calc(50vw-650px)] flex items-center justify-center gap-[10px]">
          <a
            className="link bg-red flex h-[48px] items-center justify-center px-5"
            href="/"
          >
            <h2 className="text-white">SHOP</h2>
          </a>
          <a
            href="/explore"
            className="link bg-red flex h-[48px] items-center justify-center px-5"
          >
            <h2 className="text-white">EXPLORE</h2>
          </a>
          <div className="link bg-red flex h-[48px] items-center justify-center px-9" />
        </div>
      </div>
      {/* Block One */}
      <div className="block-one relative mb-[200px]">
        <h1 className="text-red mx-auto mb-[100px] max-w-[1360px] text-center text-[11rem] leading-[9.5rem]">
          Let the adventure begin
        </h1>
        <div className="bg-red relative z-20 mx-auto h-[1000px] max-w-[1360px]">
          <Marquee
            text="featured"
            zIndex={10}
            color={'#e10600'}
            className="absolute top-[250px] left-0"
          />
          <Marquee
            text="featured"
            zIndex={30}
            className="absolute top-[250px] left-0 max-w-full overflow-hidden"
          />
        </div>
      </div>

      {/* Block Two */}
      <div className="block-two mx-auto grid max-w-[1360px] grid-cols-3 items-stretch gap-[32px]">
        {cards.map((card) => (
          <ArticleCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
