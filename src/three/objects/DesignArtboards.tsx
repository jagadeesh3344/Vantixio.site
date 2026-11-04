import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const DesignArtboards: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ribbonRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = 0.2 + Math.sin(t * 0.45) * 0.05;
    if (ribbonRef.current) {
      ribbonRef.current.rotation.y = t * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0.2, 0]}>
      {/* Background Left Artboard (Typography Aa) */}
      <group position={[-1.6, -0.1, -0.6]} rotation={[0.08, 0.25, -0.02]}>
        <mesh>
          <boxGeometry args={[1.6, 2.0, 0.06]} />
          <meshPhysicalMaterial
            color="#314A66"
            transmission={0.86}
            roughness={0.15}
            transparent
            opacity={0.8 * weight}
          />
        </mesh>
      </group>

      {/* Center Hero Artboard (Canvas with Vector Bezier Spline) */}
      <group position={[0, 0.2, 0.2]} rotation={[0.04, -0.15, 0.02]}>
        <mesh>
          <boxGeometry args={[2.5, 2.2, 0.08]} />
          <meshPhysicalMaterial
            color="#D0DBE9"
            transmission={0.92}
            roughness={0.07}
            emissive="#506A89"
            emissiveIntensity={0.35 * weight}
            transparent
            opacity={0.92 * weight}
            specularColor={new THREE.Color('#A1B6CF')}
          />
        </mesh>
      </group>

      {/* Right Artboard (Image / Media Preview) */}
      <group position={[1.8, 0.1, -0.4]} rotation={[0.06, -0.3, 0.04]}>
        <mesh>
          <boxGeometry args={[1.5, 1.9, 0.06]} />
          <meshPhysicalMaterial
            color="#415C7A"
            transmission={0.86}
            roughness={0.15}
            transparent
            opacity={0.8 * weight}
          />
        </mesh>
      </group>

      {/* Encircling Frost Silver Ribbon */}
      <mesh ref={ribbonRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.035, 16, 90]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.65 * weight} />
      </mesh>
      <pointLight position={[0, 0.3, 0.5]} color="#D0DBE9" intensity={2.8 * weight} distance={6} />
    </group>
  );
};
