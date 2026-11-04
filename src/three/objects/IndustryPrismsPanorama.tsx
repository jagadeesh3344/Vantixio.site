import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const IndustryPrismsPanorama: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.05;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.3;
    }
  });

  // 7 Industry Crystal Prisms arranged in a graceful panoramic arc
  const prisms = [
    { pos: [-3.6, -0.2, -1.2], scale: [0.7, 1.6, 0.12] },
    { pos: [-2.4, 0.0, -0.6], scale: [0.8, 1.9, 0.12] },
    { pos: [-1.2, 0.2, -0.2], scale: [0.9, 2.2, 0.14] },
    { pos: [0.0, 0.4, 0.1], scale: [1.0, 2.5, 0.16] }, // Central Enterprise Monolith
    { pos: [1.2, 0.2, -0.2], scale: [0.9, 2.2, 0.14] },
    { pos: [2.4, 0.0, -0.6], scale: [0.8, 1.9, 0.12] },
    { pos: [3.6, -0.2, -1.2], scale: [0.7, 1.6, 0.12] },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Multi-Industry Glacier Crystal Monoliths */}
      {prisms.map((p, idx) => {
        const isCenter = idx === 3;
        return (
          <group key={idx} position={p.pos as any}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={p.scale as any} />
              <meshPhysicalMaterial
                color={isCenter ? '#D0DBE9' : '#819AB8'}
                transmission={isCenter ? 0.92 : 0.86}
                roughness={isCenter ? 0.06 : 0.14}
                ior={1.5}
                emissive={isCenter ? '#506A89' : '#314A66'}
                emissiveIntensity={(isCenter ? 0.8 : 0.25) * weight}
                transparent
                opacity={(isCenter ? 0.95 : 0.8) * weight}
                specularColor={new THREE.Color('#A1B6CF')}
              />
            </mesh>
            {isCenter && (
              <pointLight position={[0, 0.5, 0.4]} color="#D0DBE9" intensity={3.0 * weight} distance={6} />
            )}
          </group>
        );
      })}

      {/* Interconnecting Horizontal Data Ribbon */}
      <mesh ref={ringRef} position={[0, 0.2, 0]} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[4.2, 0.03, 16, 120]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.65 * weight} />
      </mesh>
    </group>
  );
};

