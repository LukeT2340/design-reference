import { Card } from '../../../types';
import imageOne from '../../../assets/images/common/card-1.webp';
import imageTwo from '../../../assets/images/common/card-2.webp';
import imageThree from '../../../assets/images/common/card-3.webp';
import imageFour from '../../../assets/images/common/card-4.webp';
import imageFive from '../../../assets/images/common/card-5.webp';
import imageSix from '../../../assets/images/common/card-6.webp';
import ArticleCard from '../../miscellaneous/ArticleCard';

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
      <div className="mx-auto grid max-w-[1440px] grid-cols-3 items-stretch gap-[32px]">
        {cards.map((card) => (
          <ArticleCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
