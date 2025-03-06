import { useState } from 'react';
import Text from './Text';
import Scene from './Scene';

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
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <li
      className="group relative overflow-hidden"
      // onMouseEnter={() => setMenuActive(true)}
      // onMouseLeave={() => setMenuActive(false)}
    >
      <Scene active={menuActive} image={image} />
      <Text text={text} color={color} hoverColor={hoverColor} href={href} />
    </li>
  );
};

export default TextHoverAnim;
