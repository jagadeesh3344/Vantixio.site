import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const StudioArchitectureHologram: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const beaconRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    groupRef.current.rotation.y = 0.35 + Math.sin(t * 0.25) * 0.06;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.25;
    }
    if (beaconRef.current) {
      beaconRef.current.position.y = 1.3 + Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0.1, 0]}>
      {/* Foundation Pedestal in Deep Glacier Shadow */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[2.2, 2.4, 0.15, 36]} />
        <meshPhysicalMaterial color="#253B54" transmission={0.7} roughness={0.2} opacity={0.8 * weight} transparent />
      </mesh>
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[1.8, 2.0, 0.15, 36]} />
        <meshPhysicalMaterial color="#415C7A" transmission={0.8} emissive="#506A89" emissiveIntensity={0.5 * weight} transparent />
      </mesh>

      {/* Modern Two-Story Glass Studio Architecture */}
      {/* Lower Story Glass Pavilion */}
      <group position={[0, -0.2, 0]}>
        {/* Floor Plate 1 */}
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[2.4, 0.08, 2.0]} />
          <meshStandardMaterial color="#314A66" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Glass Outer Curtain Wall */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[2.3, 0.8, 1.9]} />
          <meshPhysicalMaterial
            color="#D0DBE9"
            transmission={0.92}
            roughness={0.06}
            ior={1.5}
            transparent
            opacity={0.88 * weight}
            emissive="#506A89"
            emissiveIntensity={0.3 * weight}
            specularColor={new THREE.Color('#A1B6CF')}
          />
        </mesh>
      </group>

      {/* Upper Story Cantilevered Studio Floor */}
      <group position={[0.2, 0.6, 0]}>
        {/* Floor Plate 2 (Cantilevered) */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[2.2, 0.08, 2.2]} />
          <meshStandardMaterial color="#253B54" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Upper Glass Pavilion */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[2.0, 0.7, 2.0]} />
          <meshPhysicalMaterial
            color="#819AB8"
            transmission={0.94}
            roughness={0.05}
            ior={1.52}
            transparent
            opacity={0.9 * weight}
            emissive="#415C7A"
            emissiveIntensity={0.4 * weight}
            specularColor={new THREE.Color('#A1B6CF')}
          />
        </mesh>
        {/* Roof Cap */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2.3, 0.06, 2.3]} />
          <meshStandardMaterial color="#D0DBE9" emissive="#A1B6CF" emissiveIntensity={0.9 * weight} />
        </mesh>
      </group>

      {/* Apex Studio Beacon */}
      <mesh ref={beaconRef} position={[0.2, 1.3, 0]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color="#F4F7FC" emissive="#D0DBE9" emissiveIntensity={2.5 * weight} />
      </mesh>

      {/* Encircling Global Lab Data Ring */}
      <mesh ref={ringRef} position={[0, 0.3, 0]} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[2.6, 0.028, 16, 90]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.65 * weight} />
      </mesh>

      {/* Internal Studio Illumination Light */}
      <pointLight position={[0.2, 0.5, 0]} color="#D0DBE9" intensity={3.0 * weight} distance={6} />
    </group>
  );
};
