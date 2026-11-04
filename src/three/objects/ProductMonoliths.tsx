import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const ProductMonoliths: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const waveMeshRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    if (waveMeshRef.current) {
      waveMeshRef.current.rotation.z = Math.sin(t * 0.4) * 0.1;
      waveMeshRef.current.position.y = -0.1 + Math.cos(t * 0.6) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[1.2, 0.2, 0]}>
      {/* Slab 1 (Back Left: Dhobicare) */}
      <group position={[-2.4, 0.1, -1.8]} rotation={[0.1, 0.4, -0.05]}>
        <mesh>
          <boxGeometry args={[1.5, 2.2, 0.08]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.9}
            roughness={0.1}
            ior={1.48}
            transparent
            opacity={0.85 * weight}
          />
        </mesh>
      </group>

      {/* Slab 2 (Middle: Theka) */}
      <group position={[-1.1, 0.2, -0.9]} rotation={[0.08, 0.35, -0.04]}>
        <mesh>
          <boxGeometry args={[1.6, 2.4, 0.08]} />
          <meshPhysicalMaterial
            color="#5eead4"
            transmission={0.9}
            roughness={0.1}
            ior={1.48}
            transparent
            opacity={0.85 * weight}
          />
        </mesh>
      </group>

      {/* Slab 3 (Front Right Hero: YesDhobi with internal silk wave) */}
      <group position={[0.4, 0.3, 0.2]} rotation={[0.06, 0.3, -0.03]}>
        <mesh>
          <boxGeometry args={[1.8, 2.6, 0.1]} />
          <meshPhysicalMaterial
            color="#00f0ff"
            transmission={0.85}
            roughness={0.06}
            ior={1.52}
            transparent
            opacity={0.9 * weight}
            emissive="#041b36"
            emissiveIntensity={0.6 * weight}
          />
        </mesh>
        {/* Internal Glowing Blue Silk Wave Mesh */}
        <mesh ref={waveMeshRef} position={[0, -0.2, 0]}>
          <planeGeometry args={[1.6, 1.4, 32, 32]} />
          <meshStandardMaterial
            color="#00d2ff"
            emissive="#00f0ff"
            emissiveIntensity={1.5 * weight}
            roughness={0.3}
            transparent
            opacity={0.7 * weight}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Cyan Base Orbiting Ribbon */}
      <mesh rotation={[Math.PI / 2.2, 0.2, 0]} position={[-0.5, -0.8, 0]}>
        <torusGeometry args={[3.2, 0.04, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.6 * weight} />
      </mesh>
      <pointLight position={[0.4, 0.3, 0.5]} color="#00f0ff" intensity={3.0 * weight} distance={6} />
    </group>
  );
};
