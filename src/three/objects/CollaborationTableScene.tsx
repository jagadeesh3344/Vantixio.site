import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const CollaborationTableScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const nodesGroupRef = useRef<THREE.Group>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    groupRef.current.position.y = 0.1 + Math.sin(t * 0.5) * 0.04;
    if (ringRef.current) ringRef.current.rotation.z = t * 0.4;
    if (nodesGroupRef.current) nodesGroupRef.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={groupRef} position={[1.4, 0.1, 0]}>
      {/* Floating Holographic Studio Workbench / Circular Glass Table */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[2.0, 2.1, 0.1, 48]} />
        <meshPhysicalMaterial
          color="#071b33"
          transmission={0.88}
          roughness={0.1}
          ior={1.5}
          transparent
          opacity={0.85 * weight}
          emissive="#00f0ff"
          emissiveIntensity={0.4 * weight}
        />
      </mesh>

      {/* Center Table Concentric Radar & Sprint Ring */}
      <mesh position={[0, -0.34, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.3, 1.6, 48]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.35 * weight} side={THREE.DoubleSide} />
      </mesh>

      {/* Center Luminous Co-Creation Beacon */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.2 * weight} />
      </mesh>

      {/* 4 Team Sprint Orbiting Nodes (Design, Engineering, Product, Scale) */}
      <group ref={nodesGroupRef}>
        {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((angle, idx) => {
          const x = Math.cos(angle) * 1.5;
          const z = Math.sin(angle) * 1.5;
          return (
            <group key={idx} position={[x, 0.15, z]}>
              {/* Node Orb */}
              <mesh>
                <sphereGeometry args={[0.16, 16, 16]} />
                <meshStandardMaterial
                  color="#5eead4"
                  emissive="#00f0ff"
                  emissiveIntensity={2.0 * weight}
                />
              </mesh>
              {/* Vertical connecting laser beam to table */}
              <mesh position={[0, -0.28, 0]}>
                <cylinderGeometry args={[0.015, 0.015, 0.55, 8]} />
                <meshBasicMaterial color="#00f0ff" transparent opacity={0.6 * weight} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Encircling Synergy Aura Ring */}
      <mesh ref={ringRef} position={[0, 0.2, 0]} rotation={[Math.PI / 2.7, 0, 0]}>
        <torusGeometry args={[2.5, 0.035, 16, 90]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.65 * weight} />
      </mesh>

      {/* Table Illumination Light */}
      <pointLight position={[0, 0.4, 0]} color="#00f0ff" intensity={3.5 * weight} distance={6} />
    </group>
  );
};

