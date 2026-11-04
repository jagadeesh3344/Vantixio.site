import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const ProjectShowcasePortal: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const satellitesRef = useRef<THREE.Group>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.25;
      coreRef.current.rotation.x = Math.sin(t * 0.4) * 0.1;
    }
    if (ringRef1.current) ringRef1.current.rotation.z = t * 0.35;
    if (ringRef2.current) ringRef2.current.rotation.z = -t * 0.5;

    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = -t * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0.2, 0]}>
      {/* Central Holographic Hexagonal Prism Core */}
      <mesh ref={coreRef} castShadow>
        <cylinderGeometry args={[0.9, 0.9, 2.2, 6]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          transmission={0.9}
          roughness={0.08}
          ior={1.52}
          transparent
          opacity={0.9 * weight}
          emissive="#00f0ff"
          emissiveIntensity={0.8 * weight}
          thickness={0.9}
        />
      </mesh>

      {/* Internal Luminous Data Rod */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 2.4, 16]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={2.5 * weight}
        />
      </mesh>

      {/* 3 Orbiting Case Study Satellites */}
      <group ref={satellitesRef}>
        {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle, i) => {
          const x = Math.cos(angle) * 2.2;
          const z = Math.sin(angle) * 2.2;
          return (
            <group key={i} position={[x, Math.sin(angle * 2) * 0.3, z]} rotation={[0, -angle, 0.1]}>
              <mesh>
                <boxGeometry args={[0.8, 1.2, 0.06]} />
                <meshPhysicalMaterial
                  color="#5eead4"
                  transmission={0.85}
                  roughness={0.12}
                  transparent
                  opacity={0.85 * weight}
                  emissive="#041b36"
                  emissiveIntensity={0.4 * weight}
                />
              </mesh>
              {/* Glowing Indicator Dot */}
              <mesh position={[0, 0.45, 0.04]}>
                <sphereGeometry args={[0.04, 12, 12]} />
                <meshBasicMaterial color="#00f0ff" />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Dual Concentric High-Speed Orbital Rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.8, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.7 * weight} />
      </mesh>
      <mesh ref={ringRef2} rotation={[-Math.PI / 2.7, 0, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5 * weight} />
      </mesh>

      {/* Center Volumetric Core Light */}
      <pointLight color="#00f0ff" intensity={3.5 * weight} distance={6} />
    </group>
  );
};

