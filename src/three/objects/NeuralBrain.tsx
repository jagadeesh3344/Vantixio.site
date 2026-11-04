import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpatialWeight } from '../scenes/SpatialTransition';

export const NeuralBrain: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const brainRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const pulseCoreRef = useRef<THREE.Mesh>(null);
  const { weight } = useSpatialWeight();

  // Generate 48 synaptic neural nodes distributed across brain lobes
  const synapticNodes = useMemo(() => {
    const nodes: { pos: [number, number, number]; size: number; phase: number }[] = [];
    for (let i = 0; i < 48; i++) {
      const hemisphere = i % 2 === 0 ? 1 : -1;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 0.75 + Math.random() * 0.25;
      
      const x = hemisphere * (0.35 + Math.abs(r * Math.sin(phi) * Math.cos(theta) * 0.7));
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.8 + 0.1;
      const z = r * Math.cos(phi) * 0.9;
      
      nodes.push({
        pos: [x, y, z],
        size: 0.04 + Math.random() * 0.03,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return nodes;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current || weight <= 0.005) return;
    const t = clock.getElapsedTime();

    if (brainRef.current) {
      // Breathing floating movement & gentle axial rotation
      brainRef.current.position.y = 0.45 + Math.sin(t * 0.7) * 0.06;
      brainRef.current.rotation.y = t * 0.2;
      brainRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
    }

    if (pulseCoreRef.current) {
      const s = 1.0 + Math.sin(t * 2.5) * 0.15;
      pulseCoreRef.current.scale.set(s, s, s);
    }

    if (ringRef1.current) ringRef1.current.rotation.z = -t * 0.35;
    if (ringRef2.current) ringRef2.current.rotation.z = t * 0.5;
  });

  return (
    <group ref={groupRef} position={[1.4, 0.1, 0]}>
      {/* 3-Tiered Cybernetic Glass Pedestal */}
      <mesh position={[0, -1.05, 0]}>
        <cylinderGeometry args={[2.2, 2.4, 0.15, 48]} />
        <meshPhysicalMaterial color="#040e1c" transmission={0.7} roughness={0.2} opacity={0.8 * weight} transparent />
      </mesh>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[1.7, 1.9, 0.15, 48]} />
        <meshPhysicalMaterial color="#072040" transmission={0.75} roughness={0.15} opacity={0.85 * weight} transparent />
      </mesh>
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[1.3, 1.5, 0.15, 48]} />
        <meshPhysicalMaterial
          color="#00f0ff"
          transmission={0.85}
          roughness={0.1}
          emissive="#00f0ff"
          emissiveIntensity={0.6 * weight}
          transparent
          opacity={0.9 * weight}
        />
      </mesh>

      {/* Upward Pedestal Light Column */}
      <pointLight position={[0, -0.5, 0]} color="#00f0ff" intensity={3.0 * weight} distance={5} />

      {/* Anatomical Glass Neural Brain Structure */}
      <group ref={brainRef} position={[0, 0.45, 0]}>
        {/* Left Hemisphere - Frontal Lobe */}
        <mesh position={[-0.45, 0.25, 0.25]} rotation={[0.1, 0.2, 0.05]}>
          <sphereGeometry args={[0.62, 32, 24]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.92}
            roughness={0.08}
            ior={1.52}
            transparent
            opacity={0.88 * weight}
            emissive="#00f0ff"
            emissiveIntensity={0.4 * weight}
          />
        </mesh>

        {/* Right Hemisphere - Frontal Lobe */}
        <mesh position={[0.45, 0.25, 0.25]} rotation={[0.1, -0.2, -0.05]}>
          <sphereGeometry args={[0.62, 32, 24]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.92}
            roughness={0.08}
            ior={1.52}
            transparent
            opacity={0.88 * weight}
            emissive="#00f0ff"
            emissiveIntensity={0.4 * weight}
          />
        </mesh>

        {/* Left Hemisphere - Parietal / Occipital Lobe */}
        <mesh position={[-0.42, 0.15, -0.32]} rotation={[-0.1, -0.1, 0.05]}>
          <sphereGeometry args={[0.68, 32, 24]} />
          <meshPhysicalMaterial
            color="#5eead4"
            transmission={0.92}
            roughness={0.08}
            ior={1.52}
            transparent
            opacity={0.88 * weight}
            emissive="#00d2ff"
            emissiveIntensity={0.4 * weight}
          />
        </mesh>

        {/* Right Hemisphere - Parietal / Occipital Lobe */}
        <mesh position={[0.42, 0.15, -0.32]} rotation={[-0.1, 0.1, -0.05]}>
          <sphereGeometry args={[0.68, 32, 24]} />
          <meshPhysicalMaterial
            color="#5eead4"
            transmission={0.92}
            roughness={0.08}
            ior={1.52}
            transparent
            opacity={0.88 * weight}
            emissive="#00d2ff"
            emissiveIntensity={0.4 * weight}
          />
        </mesh>

        {/* Left Temporal Lobe */}
        <mesh position={[-0.55, -0.25, 0.05]} rotation={[0, 0, 0.2]}>
          <sphereGeometry args={[0.48, 24, 20]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.9}
            roughness={0.1}
            transparent
            opacity={0.85 * weight}
            emissive="#041b36"
            emissiveIntensity={0.3 * weight}
          />
        </mesh>

        {/* Right Temporal Lobe */}
        <mesh position={[0.55, -0.25, 0.05]} rotation={[0, 0, -0.2]}>
          <sphereGeometry args={[0.48, 24, 20]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.9}
            roughness={0.1}
            transparent
            opacity={0.85 * weight}
            emissive="#041b36"
            emissiveIntensity={0.3 * weight}
          />
        </mesh>

        {/* Central Luminous Quantum AI Core Matrix */}
        <mesh ref={pulseCoreRef} position={[0, 0.05, 0]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={3.0 * weight}
          />
        </mesh>

        {/* Synaptic Node Constellation */}
        {synapticNodes.map((node, i) => (
          <mesh key={i} position={node.pos}>
            <sphereGeometry args={[node.size, 12, 12]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.9 * weight} />
          </mesh>
        ))}

        {/* Central Core Illumination */}
        <pointLight position={[0, 0.05, 0]} color="#00f0ff" intensity={4.5 * weight} distance={6} />
      </group>

      {/* Orbiting Synaptic Data Rings */}
      <mesh ref={ringRef1} position={[0, 0.5, 0]} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[2.3, 0.03, 16, 90]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.7 * weight} />
      </mesh>
      <mesh ref={ringRef2} position={[0, 0.5, 0]} rotation={[-Math.PI / 3.0, 0.3, 0]}>
        <torusGeometry args={[2.6, 0.02, 16, 90]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5 * weight} />
      </mesh>
    </group>
  );
};
