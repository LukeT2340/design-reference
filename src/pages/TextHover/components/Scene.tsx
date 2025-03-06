import { Canvas } from '@react-three/fiber';
import Model from './Model';

interface Props {
  active: boolean;
  image: string;
}

const Scene: React.FC<Props> = ({ active, image }) => {
  if (!active) return null;

  return (
    <div className="fixed top-0 left-0 z-30 h-screen w-screen">
      <Canvas>
        <Model image={image} active={active} />
      </Canvas>
    </div>
  );
};
export default Scene;
