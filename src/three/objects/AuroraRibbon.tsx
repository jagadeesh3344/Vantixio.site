import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const AuroraRibbon: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  // Sweeping 3D Catmull-Rom curve across the upper sky
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6, -0.8, 1.0),
      new THREE.Vector3(-3, 0.6, 0.5),
      new THREE.Vector3(0, 1.6, -0.5),
      new THREE.Vector3(3, 1.2, -1.5),
      new THREE.Vector3(6, 2.2, -3.0),
    ]);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.45) * 0.12;
    meshRef.current.rotation.z = Math.cos(t * 0.3) * 0.04;
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <tubeGeometry args={[curve, 100, 0.28, 16, false]} />
        <meshPhysicalMaterial
          color="#D0DBE9"
          transmission={0.92}
          roughness={0.1}
          ior={1.48}
          transparent
          opacity={0.88 * weight}
          emissive="#506A89"
          emissiveIntensity={0.6 * weight}
          specularColor={new THREE.Color('#A1B6CF')}
        />
      </mesh>

      {/* Orbiting particles along the ribbon */}
      <pointLight position={[0, 1.6, -0.5]} color="#D0DBE9" intensity={2.0 * weight} distance={7} />
    </group>
  );
};
