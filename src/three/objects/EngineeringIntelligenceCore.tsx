import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const EngineeringIntelligenceCore: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const coreCrystalRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    groupRef.current.rotation.y = 0.4 + Math.sin(t * 0.25) * 0.08;

    if (ringRef1.current) ringRef1.current.rotation.z = t * 0.35;
    if (ringRef2.current) ringRef2.current.rotation.z = -t * 0.45;

    if (coreCrystalRef.current) {
      coreCrystalRef.current.position.y = 0.65 + Math.sin(t * 0.7) * 0.04;
      coreCrystalRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0.2, 0]} rotation={[0.35, 0, 0]}>
      {/* Bottom Infrastructure Layer (Cloud Architecture) */}
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[2.2, 0.22, 2.2]} />
        <meshPhysicalMaterial
          color="#314A66"
          transmission={0.85}
          roughness={0.2}
          ior={1.5}
          transparent
          opacity={0.85 * weight}
          emissive="#253B54"
          emissiveIntensity={0.3 * weight}
        />
      </mesh>

      {/* Middle Integration Layer (Full-Stack & APIs) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.0, 0.22, 2.0]} />
        <meshPhysicalMaterial
          color="#506A89"
          transmission={0.88}
          roughness={0.12}
          ior={1.5}
          transparent
          opacity={0.9 * weight}
          emissive="#415C7A"
          emissiveIntensity={0.5 * weight}
        />
      </mesh>

      {/* Top Layer (Autonomous AI & Logic Engine) */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[1.8, 0.25, 1.8]} />
        <meshPhysicalMaterial
          color="#D0DBE9"
          transmission={0.92}
          roughness={0.06}
          ior={1.52}
          transparent
          opacity={0.95 * weight}
          emissive="#506A89"
          emissiveIntensity={0.7 * weight}
          specularColor={new THREE.Color('#A1B6CF')}
        />
      </mesh>

      {/* Central Luminous Neural Crystal Die */}
      <mesh ref={coreCrystalRef} position={[0, 0.65, 0]}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial
          color="#F4F7FC"
          emissive="#D0DBE9"
          emissiveIntensity={2.8 * weight}
        />
      </mesh>

      {/* Orbiting Optical Data Rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.8, 0.032, 16, 100]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.75 * weight} />
      </mesh>
      <mesh ref={ringRef2} rotation={[-Math.PI / 2.8, 0.2, 0]}>
        <torusGeometry args={[3.1, 0.02, 16, 100]} />
        <meshBasicMaterial color="#819AB8" transparent opacity={0.5 * weight} />
      </mesh>

      {/* Central Core Illumination */}
      <pointLight position={[0, 0.4, 0]} color="#D0DBE9" intensity={3.5 * weight} distance={6} />
    </group>
  );
};

