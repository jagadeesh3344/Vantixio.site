import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const ServiceMonoliths: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!ringRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.z = t * 0.35;
    ringRef.current.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.3) * 0.04;
  });

  const cards = [
    { pos: [-3.2, -0.2, -0.8], rot: [0, 0.4, 0], isHero: false },
    { pos: [-1.9, 0.1, -0.2], rot: [0, 0.2, 0], isHero: false },
    { pos: [0.0, 0.5, 0.4], rot: [0, 0, 0], isHero: true }, // AI & Automation Hero
    { pos: [1.9, 0.1, -0.2], rot: [0, -0.2, 0], isHero: false },
    { pos: [3.2, -0.2, -0.8], rot: [0, -0.4, 0], isHero: false },
    { pos: [4.4, -0.4, -1.4], rot: [0, -0.5, 0], isHero: false },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 6 Monolithic Glacier Glass Slabs */}
      {cards.map((card, i) => (
        <group key={i} position={card.pos as any} rotation={card.rot as any}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.05, 1.8, 0.12]} />
            <meshPhysicalMaterial
              color={card.isHero ? '#D0DBE9' : '#819AB8'}
              transmission={card.isHero ? 0.9 : 0.86}
              roughness={card.isHero ? 0.06 : 0.15}
              ior={1.5}
              emissive={card.isHero ? '#506A89' : '#314A66'}
              emissiveIntensity={(card.isHero ? 0.75 : 0.2) * weight}
              transparent
              opacity={(card.isHero ? 0.95 : 0.8) * weight}
              thickness={0.8}
              specularColor={new THREE.Color('#A1B6CF')}
            />
          </mesh>
          {card.isHero && (
            <pointLight position={[0, 0, 0.3]} color="#D0DBE9" intensity={2.5 * weight} distance={5} />
          )}
        </group>
      ))}

      {/* High-Speed Orbital Ring in Frost Silver */}
      <mesh ref={ringRef} position={[0, 0.2, 0]}>
        <torusGeometry args={[3.8, 0.032, 16, 100]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.6 * weight} />
      </mesh>
    </group>
  );
};
