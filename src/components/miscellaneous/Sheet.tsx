import { Block } from '../../types';

interface Props {
  block: Block;
  index: number;
  totalBlocks: number;
}

const Sheet: React.FC<Props> = ({ block, index, totalBlocks }) => {
  const { text, textColor, backgroundImage, ref } = block;

  return (
    <div
      style={{
        color: textColor,
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: index === totalBlocks - 1 ? '40vh' : '6vh',
      }}
      className="sheet sticky top-[30vh] h-[70vh] bg-cover bg-center bg-no-repeat"
      ref={ref}
    >
      <div className="mx-auto max-w-[80vw]">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Sheet;
