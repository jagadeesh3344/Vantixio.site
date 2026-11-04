import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const StargateAndEarth: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const portalRef = useRef<THREE.Group>(null);
  const portalRingRef = useRef<THREE.Mesh>(null);
  const vEmblemRef = useRef<THREE.Group>(null);
  const { weight } = useSpatialWeight();

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    if (earthRef.current) {
      earthRef.current.rotation.y = t * 0.03;
    }
    if (portalRef.current) {
      portalRef.current.position.y = 1.0 + Math.sin(t * 0.5) * 0.04;
    }
    if (portalRingRef.current) {
      portalRingRef.current.rotation.z = t * 0.25;
    }
    if (vEmblemRef.current) {
      vEmblemRef.current.rotation.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Planet Earth Curved Horizon Sphere in Lower Ground */}
      <mesh ref={earthRef} position={[0, -5.4, -4.5]}>
        <sphereGeometry args={[5.6, 64, 64]} />
        <meshStandardMaterial
          color="#253B54"
          roughness={0.65}
          metalness={0.25}
          emissive="#314A66"
          emissiveIntensity={0.5 * weight}
        />
      </mesh>

      {/* Atmospheric Rim Halo Glow around Earth in Ice Blue */}
      <mesh position={[0, -5.4, -4.6]}>
        <sphereGeometry args={[5.8, 48, 48]} />
        <meshBasicMaterial
          color="#819AB8"
          transparent
          opacity={0.25 * weight}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Signature Glacier-Glass Ribbon Return — Summit Portal */}
      <group ref={portalRef} position={[0, 1.0, -1.8]}>
        {/* Left Portal Pylon */}
        <mesh position={[-1.25, 0.8, 0]} rotation={[0, 0, -0.42]}>
          <boxGeometry args={[0.65, 4.8, 0.55]} />
          <meshPhysicalMaterial
            color="#D0DBE9"
            transmission={0.94}
            roughness={0.04}
            ior={1.55}
            transparent
            opacity={0.92 * weight}
            emissive="#506A89"
            emissiveIntensity={1.0 * weight}
            specularColor={new THREE.Color('#A1B6CF')}
          />
        </mesh>

        {/* Right Portal Pylon */}
        <mesh position={[1.25, 0.8, 0]} rotation={[0, 0, 0.42]}>
          <boxGeometry args={[0.65, 4.8, 0.55]} />
          <meshPhysicalMaterial
            color="#819AB8"
            transmission={0.94}
            roughness={0.04}
            ior={1.55}
            transparent
            opacity={0.92 * weight}
            emissive="#415C7A"
            emissiveIntensity={1.0 * weight}
            specularColor={new THREE.Color('#A1B6CF')}
          />
        </mesh>

        {/* Swirling Event-Horizon Light Ring */}
        <mesh ref={portalRingRef} position={[0, 0.9, -0.1]}>
          <ringGeometry args={[1.2, 1.8, 48]} />
          <meshBasicMaterial
            color="#A1B6CF"
            transparent
            opacity={0.45 * weight}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Floating Faceted Vantixio 'V' Emblem inside Portal */}
        <group ref={vEmblemRef} position={[0, 1.1, 0]}>
          <mesh position={[-0.28, 0, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.16, 0.9, 0.1]} />
            <meshPhysicalMaterial color="#F4F7FC" emissive="#D0DBE9" emissiveIntensity={1.8 * weight} />
          </mesh>
          <mesh position={[0.28, 0, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.16, 0.9, 0.1]} />
            <meshPhysicalMaterial color="#F4F7FC" emissive="#D0DBE9" emissiveIntensity={1.8 * weight} />
          </mesh>
        </group>

        {/* Horizon Core Starburst Light */}
        <pointLight position={[0, 0.8, 0]} color="#D0DBE9" intensity={4.5 * weight} distance={12} />
      </group>

      {/* Polished Obsidian & Glacier Titanium Summit Terrace */}
      <mesh position={[0, -1.8, 0.5]}>
        <cylinderGeometry args={[4.2, 4.8, 0.25, 48]} />
        <meshStandardMaterial color="#253B54" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Terrace Perimeter Frost Silver Guideway */}
      <mesh position={[0, -1.66, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.8, 4.15, 48]} />
        <meshBasicMaterial color="#A1B6CF" transparent opacity={0.35 * weight} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
