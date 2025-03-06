import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { vertex, fragment } from '../shaders/Shader';
import { useTexture, useAspect } from '@react-three/drei';
import useMouse from '../hooks/useMouse';
import useDimension from '../hooks/useDimension';

interface Props {
  image: string;
  active: boolean;
}

const Model: React.FC<Props> = ({ image, active }) => {
  const plane =
    useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>(null);
  const { viewport } = useThree();
  const dimension = useDimension();
  const mouse = useMouse();
  const texture = useTexture(image);
  const opacity = useMotionValue(0);

  const { width, height } = texture.image;
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
  if (!texture) return null;
  if (!texture.image?.width || !texture.image?.height) return null;

  const scale = useAspect(width, height, 0.225);
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    if (!plane.current) return;

    if (active) {
      plane.current.material.uniforms.uTexture.value = texture;
      animate(opacity, 1, {
        duration: 0.2,
        onUpdate: (latest) => {
          if (!plane.current) return;
          plane.current.material.uniforms.uAlpha.value = latest;
        },
      });
    } else {
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (latest) => {
          if (!plane.current) return;
          plane.current.material.uniforms.uAlpha.value = latest;
        },
      });
    }
  }, [active]);

  const uniforms = useRef({
    uDelta: { value: { x: 0, y: 0 } },
    uAmplitude: { value: 0.0005 },
    uTexture: { value: texture },
    uAlpha: { value: 0 },
  });

  useFrame(() => {
    if (!plane.current) return;

    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();

    if (Math.abs(x - smoothX) > 1) {
      smoothMouse.x.set(lerp(smoothX, x, 0.1));
      smoothMouse.y.set(lerp(smoothY, y, 0.1));

      plane.current.material.uniforms.uDelta.value = {
        x: x - smoothX,
        y: -1 * (y - smoothY),
      };
    }
  });

  const x = useTransform(
    smoothMouse.x,
    [0, dimension.width],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    smoothMouse.y,
    [0, dimension.height],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );

  return (
    <mesh position-x={x} position-y={y} ref={plane} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        // vertexShader={vertex}
        // fragmentShader={fragment}
        uniforms={uniforms.current}
        // transparent={true}
      />
    </mesh>
  );
};

export default Model;
