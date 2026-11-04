import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const ChipProcessorStack: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const topChipRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = 0.4 + Math.sin(t * 0.3) * 0.1;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
    }
    if (topChipRef.current) {
      topChipRef.current.position.y = 0.65 + Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0.2, 0]} rotation={[0.4, 0, 0]}>
      {/* Bottom Layer Chip */}
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[2.2, 0.22, 2.2]} />
        <meshPhysicalMaterial
          color="#0a2540"
          transmission={0.88}
          roughness={0.18}
          ior={1.5}
          transparent
          opacity={0.85 * weight}
          emissive="#00f0ff"
          emissiveIntensity={0.3 * weight}
        />
      </mesh>

      {/* Middle Layer Chip */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.0, 0.22, 2.0]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          transmission={0.9}
          roughness={0.12}
          ior={1.5}
          transparent
          opacity={0.9 * weight}
          emissive="#00f0ff"
          emissiveIntensity={0.6 * weight}
        />
      </mesh>

      {/* Top Layer Chip with Vantixio Core Emblem */}
      <mesh ref={topChipRef} position={[0, 0.65, 0]}>
        <boxGeometry args={[1.8, 0.25, 1.8]} />
        <meshPhysicalMaterial
          color="#5eead4"
          transmission={0.92}
          roughness={0.08}
          ior={1.52}
          transparent
          opacity={0.95 * weight}
          emissive="#00f0ff"
          emissiveIntensity={0.9 * weight}
        />
      </mesh>

      {/* Central Luminous Core Light */}
      <pointLight position={[0, 0, 0]} color="#00f0ff" intensity={3.5 * weight} distance={6} />

      {/* Orbiting Tech Light Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.8, 0.035, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.8 * weight} />
      </mesh>
    </group>
  );
};
