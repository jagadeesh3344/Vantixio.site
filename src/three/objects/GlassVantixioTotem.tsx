import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const GlassVantixioTotem: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const vLeftRef = useRef<THREE.Mesh>(null);
  const vRightRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.05;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0.8, 0.1, 0]}>
      {/* 3-Tiered Glass Pedestal */}
      <mesh position={[0, -1.0, 0]}>
        <cylinderGeometry args={[2.2, 2.4, 0.18, 48]} />
        <meshPhysicalMaterial color="#041226" transmission={0.7} roughness={0.2} opacity={0.8 * weight} transparent />
      </mesh>
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[1.8, 2.0, 0.16, 48]} />
        <meshPhysicalMaterial color="#00f0ff" transmission={0.8} emissive="#00f0ff" emissiveIntensity={0.6 * weight} opacity={0.85 * weight} transparent />
      </mesh>

      {/* Monumental 3D Glass Vantixio 'V' Structure */}
      <group position={[0, 0.3, 0]}>
        {/* Left Wing of 'V' */}
        <mesh ref={vLeftRef} position={[-0.6, 0.4, 0]} rotation={[0, 0, -0.38]}>
          <boxGeometry args={[0.55, 2.6, 0.45]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.94}
            roughness={0.05}
            ior={1.55}
            transparent
            opacity={0.92 * weight}
            emissive="#00f0ff"
            emissiveIntensity={0.9 * weight}
            reflectivity={0.9}
          />
        </mesh>

        {/* Right Wing of 'V' */}
        <mesh ref={vRightRef} position={[0.6, 0.4, 0]} rotation={[0, 0, 0.38]}>
          <boxGeometry args={[0.55, 2.6, 0.45]} />
          <meshPhysicalMaterial
            color="#00f0ff"
            transmission={0.94}
            roughness={0.05}
            ior={1.55}
            transparent
            opacity={0.92 * weight}
            emissive="#00d2ff"
            emissiveIntensity={0.9 * weight}
            reflectivity={0.9}
          />
        </mesh>
      </group>

      {/* Orbiting Partnership Ribbon */}
      <mesh ref={ringRef} position={[0, 0.4, 0]} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[2.5, 0.035, 16, 80]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.75 * weight} />
      </mesh>

      {/* Upward Volumetric Beacon */}
      <pointLight position={[0, -0.6, 0]} color="#00f0ff" intensity={4.0 * weight} distance={7} />
    </group>
  );
};
