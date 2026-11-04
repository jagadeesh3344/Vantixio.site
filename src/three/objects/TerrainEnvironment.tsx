import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const TerrainEnvironment: React.FC = () => {
  const waterRef = useRef<THREE.Mesh>(null);
  const horizonGlowRef = useRef<THREE.Mesh>(null);

  // Subtle dynamic water wave and horizon breathing
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (waterRef.current) {
      waterRef.current.position.y = -1.2 + Math.sin(t * 0.5) * 0.015;
    }
    if (horizonGlowRef.current) {
      (horizonGlowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.18 + Math.sin(t * 0.35) * 0.04;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Arctic Basin Reflective Water Body */}
      <mesh
        ref={waterRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100, 64, 64]} />
        <meshStandardMaterial
          color="#314A66"
          roughness={0.12}
          metalness={0.75}
          envMapIntensity={1.8}
        />
      </mesh>

      {/* Shoreline Luminescent Wave Fissure Rings in Frost Silver */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[6, 16, 64]} />
        <meshBasicMaterial
          color="#A1B6CF"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.17, 0]}>
        <ringGeometry args={[18, 28, 64]} />
        <meshBasicMaterial
          color="#D0DBE9"
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Atmospheric Horizon Glacier Dawn Haze */}
      <mesh ref={horizonGlowRef} position={[0, 1.2, -24]}>
        <planeGeometry args={[60, 10]} />
        <meshBasicMaterial
          color="#819AB8"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Distant Glacier Mountain Ridge - Left Flank */}
      <mesh position={[-18, 0.5, -18]} rotation={[0, 0.35, 0]}>
        <cylinderGeometry args={[2, 14, 8, 16, 1, true]} />
        <meshStandardMaterial color="#253B54" roughness={0.92} metalness={0.15} />
      </mesh>

      {/* Distant Glacier Mountain Ridge - Right Flank */}
      <mesh position={[20, 0.8, -20]} rotation={[0, -0.4, 0]}>
        <cylinderGeometry args={[2.5, 16, 9, 16, 1, true]} />
        <meshStandardMaterial color="#253B54" roughness={0.92} metalness={0.15} />
      </mesh>

      {/* Distant Horizon Ridge - Center Background */}
      <mesh position={[0, 0.2, -26]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[4, 28, 7, 24, 1, true]} />
        <meshStandardMaterial color="#253B54" roughness={0.95} metalness={0.1} />
      </mesh>

      {/* Floating Glacier Crystal Dust Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={600}
            array={
              new Float32Array(
                Array.from({ length: 1800 }, () => (Math.random() - 0.5) * 45)
              )
            }
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#D0DBE9"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </group>
  );
};
